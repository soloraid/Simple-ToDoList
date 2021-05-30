import { Component, OnInit } from '@angular/core';
import {Task} from "../../task.module";
import {TodolistService} from "../todolist.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  toDoList: Task[] = [];
  editable: boolean[] = [];
  newTitle: string = '';

  constructor(private todolistService: TodolistService) {

  }

  ngOnInit(): void {
    this.getAllList();
  }

  omitTask(element: Task) {
     this.toDoList = this.todolistService.deleteFromList(element.id);

  }

  checkTask(element: Task) {
    this.toDoList = this.todolistService.updateList(element.id);
  }

  private getAllList() {
    this.toDoList = this.todolistService.getList();
    for (const index in this.toDoList) {
      this.editable[index] = false;
    }
  }

  assignEdit(edit: boolean, index: any) {
    this.editable[index] = edit;
  }

  editName(new_name: string, id: number, index: number) {
    this.toDoList = this.todolistService.editName(id,new_name);
    this.newTitle = '';
    this.editable[index] = false;
  }
}
