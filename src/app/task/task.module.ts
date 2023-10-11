import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskDetailComponent} from "./task-detail/task-detail.component";
import {TaskListComponent} from "./task-list/task-list.component";
import {RouterModule, Routes} from "@angular/router";
import {NgIconsModule, provideNgIconsConfig} from "@ng-icons/core";
import {heroPencilSquare, heroAdjustmentsHorizontal, heroPlusCircle, heroTrash} from "@ng-icons/heroicons/outline";
import {TaskService} from "./task.service";
import {FormsModule} from "@angular/forms";
import {TaskFormComponent} from "./task-form/task-form.component";
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { LoaderComponent } from './loader/loader.component';

const taskRoutes: Routes = [
  {path: "tasks", component: TaskListComponent},
  {path: "task/:id", component: TaskDetailComponent},
  {path:"task/update/:id", component: EditTaskComponent},
  {path:"add", component: AddTaskComponent},
];

@NgModule({
  declarations: [
    TaskDetailComponent,
    TaskFormComponent,
    TaskListComponent,
    EditTaskComponent,
    AddTaskComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({heroPencilSquare, heroAdjustmentsHorizontal, heroPlusCircle, heroTrash}),
    RouterModule.forChild(taskRoutes),
    FormsModule
  ],
  providers: [
    TaskService,
    provideNgIconsConfig({
      size: '1.5em'
    }),
  ],
})
export class TaskModule {
}
