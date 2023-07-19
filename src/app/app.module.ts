import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ButtonComponent } from './component/button/button.component';
import { TASKS } from './mock-tasks';
import { TasksComponent } from './component/tasks/tasks.component';
import { TaskItemComponent } from './component/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
