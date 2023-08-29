import { Injectable } from '@angular/core';
import { Task } from '../Model/Task';
import { State } from '../Model/state';

@Injectable()
export class CRUDTaskService {
  constructor() {}

  getListTask() {
    let task: Array<Task> = new Array<Task>();
    task.push({
      titre: 'Manger',
      description: 'Riz',
      date: '2023-06-05',
      etat: State.EN_COURS,
    });
    task.push({
      titre: 'Manger',
      description: 'Pâtes',
      date: '2021-04-12',
      etat: State.EN_COURS,
    });
    return task;
  }

  deleteTask() {}
}