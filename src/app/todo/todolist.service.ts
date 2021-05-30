import { Injectable } from '@angular/core';
import {Task} from "../task.module";

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  counter = 0
  private toDoList: Task[] = [new Task("hossein",this.counter++),new Task("ali",this.counter++), new Task("hashem",this.counter++)];
  constructor() { }

  addToList(title: string): Task[] {
    this.toDoList.push((new Task(title,this.counter++)))
    console.log(this.toDoList);
    return this.getList();
  }

  deleteFromList(id: number): Task[] {
    for (let i = 0 ; i < this.toDoList.length ; i++) {
      if (this.toDoList[i].id == id) {
        this.toDoList.splice(i,1);
        break;
      }
    }
    return this.getList();
  }

  getList(): Task[] {
    return this.toDoList;
  }

  updateList(id: number): Task[] {
    for (let i = 0 ; i < this.toDoList.length ; i++) {
      if (this.toDoList[i].id == id) {
        this.toDoList[i].Done = true;
        break
      }
    }
    return this.getList();
  }

  editName(id: number, new_name: string) {
    for (let i = 0 ; i < this.toDoList.length ; i++) {
      if (this.toDoList[i].id == id) {
        this.toDoList[i].title = new_name;
        break
      }
    }
    return this.getList();
  }
}
