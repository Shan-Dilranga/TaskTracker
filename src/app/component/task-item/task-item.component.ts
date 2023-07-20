import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

    @Input() task:Task | any;

    @Output() onDeletetask: EventEmitter<Task>= new EventEmitter();
 constructor(){}

 ngOnInit(): void {
   
 }
 onDelete(task:Task){
  this.onDeletetask.emit(task);
 }
}
