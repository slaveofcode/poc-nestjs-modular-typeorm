import { NestFactory } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot({
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
        join(__dirname, './**/entities/*.entity{.js,.ts}')
      ]
    })
  }));
  await app.listen(6000);
}
bootstrap();