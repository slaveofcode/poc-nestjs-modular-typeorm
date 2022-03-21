import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModule as ExampleModule } from '@slaveofcode/example';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ExampleModule.forRoot({
      orm: TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        username: 'soc',
        password: 'soc',
        database: 'example_db',
        port: Number(process.env.DB_PORT),
        migrationsTableName: 'migrations_meta',
        migrationsRun: true,
        synchronize: false,
        name: 'example',
        entities: [
          join(
            __dirname,
            '../node_modules/@slaveofcode/*/dist/**/entities/*.entity{.ts,.js}',
          ),
        ],
        migrations: [
          join(
            __dirname,
            '../node_modules/@slaveofcode/*/dist/migrations/*{.ts,.js}',
          ),
        ],
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
