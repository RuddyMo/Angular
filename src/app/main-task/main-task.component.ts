import { Component } from '@angular/core';
import { State } from '../Model/state';
import { Task } from '../Model/Task';
import { TaskFacadeService } from '../services/task-facade.service';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss']
})
export class MainTaskComponent {
  tasklist: Task[] = [];
  task: Array<Task>= new Array<Task>();

  constructor(private taskFacadeService: TaskFacadeService){
    this.task.push({
      titre: 'Steph',
      description: 'Voici Stéphane',
      date: '2023-08-28',
      etat: State.EN_COURS,
    });

    this.task.push({
      titre: 'Steph',
      description: 'Voici Stéphane',
      date: '2023-08-28',
      etat: State.EN_COURS,
    });
  }
  ngOnInit() {
    this.tasklist = this.taskFacadeService.getListTask();
  }
}


