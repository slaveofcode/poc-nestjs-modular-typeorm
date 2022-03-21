import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { Todo } from './entities/todo.entity';
import { TodoRepository } from './repositories/todo.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TodoRepository], 'example')],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}