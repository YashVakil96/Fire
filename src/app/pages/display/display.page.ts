import { Component, OnInit } from "@angular/core";
import { TodoService, Todo } from "../../services/todo.service";

@Component({
  selector: "app-display",
  templateUrl: "./display.page.html",
  styleUrls: ["./display.page.scss"]
})
export class DisplayPage implements OnInit {
  private todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }
  remove(item) {
    this.todoService.removeTodo(item.id);
  }
}
