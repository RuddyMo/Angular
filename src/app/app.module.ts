import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TaskComponent } from './task/task.component';
import { MainTaskComponent } from './main-task/main-task.component';
import { FormatDatePipe } from './format-date.pipe';
import { TaskModule } from './task/task.module';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent],
  imports: [BrowserModule, AppRoutingModule, TaskModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
