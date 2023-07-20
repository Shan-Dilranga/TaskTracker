import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable, of} from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';


const httpoption={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {

    private apiurl='http://localhost:5000/tasks'
  constructor(private http:HttpClient) { }
  getTask(): Observable <Task[]> {
    // const tasks= of(TASKS);
    // return tasks;
    return this.http.get<Task[]>(this.apiurl)
  }

  deleteTask(task:Task):Observable <Task>{
    const url=`${this.apiurl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
  updateTaskReminder(task: Task):Observable <Task>{
    const url=`${this.apiurl}/${task.id}`;
    return this.http.put<Task>(url,task, httpoption);
  }
}
