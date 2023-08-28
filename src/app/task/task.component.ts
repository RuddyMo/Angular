import { Component } from '@angular/core';
import { Task } from '../Model/Task';
import { State } from '../Model/state';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  task:Task={
    titre : 'Livre Jean',
    description : 'C\'est un livre qui parle des annimaux',
    etat : State.EN_COURS,
  };
}
