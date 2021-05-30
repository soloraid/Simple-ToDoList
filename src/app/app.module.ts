import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoNewComponent } from './todo/todo-new/todo-new.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from "@angular/material/icon";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  {
   path:'',
   pathMatch: 'full',
   redirectTo: 'home'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'todo',
    component: TodoListComponent,
    children: [
      {
        path: 'todo-new',
        component: TodoNewComponent
      }
    ]
  },
  {
    path: 'todo-new',
    component: TodoNewComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoNewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NoopAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
