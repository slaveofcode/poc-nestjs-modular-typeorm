import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository, getConnectionToken } from '@nestjs/typeorm';
import { Connection, getConnection, getConnectionManager } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { TodoRepository } from './repositories/todo.repository';

@Injectable()
export class TodoService {
  private todoRepo: TodoRepository;

  constructor(
    @InjectConnection('example')
    private readonly conn: Connection
  ) {
    this.todoRepo = this.conn.getRepository<Todo>(Todo)
  }

  create(createTodoDto: CreateTodoDto) {
    return 'This action adds a new todo';
  }

  findAll() {
    return this.todoRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
