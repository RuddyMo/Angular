import { Injectable } from '@angular/core';
import { CRUDTaskService } from './crudtask.service';

@Injectable()
export class TaskFacadeService {
  constructor(private crudtask: CRUDTaskService) {}

  getListTask() {
    return this.crudtask.getListTask();
  }
}