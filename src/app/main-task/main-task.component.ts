import { Component } from '@angular/core';
import { State } from '../Model/state';
import { Task } from '../Model/Task';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss']
})
export class MainTaskComponent {

  task: Array<Task>= new Array<Task>();

  constructor(){
    this.task.push({
      titre: 'Steph',
      description: 'Voici Stéphane',
      etat: State.EN_COURS,
    });

    this.task.push({
      titre: 'Steph',
      description: 'Voici Stéphane',
      date: '2023-08-28',
      etat: State.EN_COURS,
    });


  }
}
