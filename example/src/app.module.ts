import { DynamicModule, Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmCoreModule } from '@nestjs/typeorm/dist/typeorm-core.module'
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { DbModule } from './db/db.module';

@Module({
  // imports: [DbModule]
})
export class AppModule {
  static forRoot(o: { orm: DynamicModule }): DynamicModule {
    console.info(o.orm)
    const typeOrmMod = o.orm
    // const typeOrmMod = TypeOrmModule.forRoot({
    //     type: 'postgres',
    //     host: 'localhost',
    //     username: 'soc',
    //     password: 'soc',
    //     database: 'example_db',
    //     port: Number(process.env.DB_PORT),
    //     migrationsTableName: 'migrations_meta',
    //     migrationsRun: true,
    //     synchronize: false,
    //     name: 'example'
    //   })
    // const typeOrmCoreMod = typeOrmMod.imports[0] as DynamicModule


    // const db = DbModule.forRoot()

    const mod = {
      module: AppModule,
      imports: [
        typeOrmMod,
        // typeOrmCoreMod,
        // db,
        TodoModule
      ],
      controllers: [AppController],
      providers: [
        AppService,
        TodoModule,
        // ...typeOrmCoreMod.providers
      ],
      exports: [
        TodoModule
        // typeOrmMod
        // ...typeOrmCoreMod.exports
      ]
    };

    return mod
  }
}
