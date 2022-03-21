import { DynamicModule, Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({})
export class DbModule {
  static async forRoot(): Promise<DynamicModule> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      module: DbModule,
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          username: 'soc',
          password: 'soc',
          database: 'example_db',
          synchronize: false,
          retryAttempts: 2,
          retryDelay: 1000,
        }),
      ],
      exports: [TypeOrmModule],
      global: true
    };
  }
}
