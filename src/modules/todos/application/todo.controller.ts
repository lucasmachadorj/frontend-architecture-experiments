import { TodoRepository } from "../repositories/todo.repository";

export class TodoController {
  constructor(private todoRepository: TodoRepository) {}

  async createTodo(text: string): Promise<void> {
    await this.todoRepository.create(text);
  }
}
