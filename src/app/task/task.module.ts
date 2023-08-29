import { NgModule } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { TaskComponent } from './task.component';
import { MainTaskComponent } from '../main-task/main-task.component';
import { FormatDatePipe } from '../format-date.pipe';
import { RouterModule } from '@angular/router';
import { CRUDTaskService } from '../services/crudtask.service';
import { TaskFacadeService } from '../services/task-facade.service';

@NgModule({
  declarations: [
    TaskComponent,
    MainTaskComponent,
    FormatDatePipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'display', component: TaskComponent },
    ]),
  ],
  providers: [CRUDTaskService, TaskFacadeService],
})
export class TaskModule {}