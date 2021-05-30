import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {TodolistService} from "../todolist.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {


  constructor(private toDoListService: TodolistService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(to_do: NgForm) {
    this.toDoListService.addToList(to_do.value.title);
    this.router.navigate(['/todo']);
  }
}
