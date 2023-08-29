import { Injectable } from '@angular/core';
import { Task } from '../Model/Task';
import { State } from '../Model/state';

@Injectable()
export class CRUDTaskService {
  constructor() {}

  getListTask() {
    let task: Array<Task> = new Array<Task>();
    task.push({
      titre: 'Steph',
      description: 'Voici Stéphane',
      date: '2023-08-28',
      etat: State.EN_COURS,
    });

    task.push({
      titre: 'Steph',
      description: 'Voici Stéphane',
      date: '2023-08-28',
      etat: State.EN_COURS,
    });
    return task;
  }

  deleteTask() {}
}