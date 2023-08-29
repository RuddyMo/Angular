import { Component, Input } from '@angular/core';
import { Task } from '../Model/Task';
import { State } from '../Model/state';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Array <Task> = new Array<Task>();
}
