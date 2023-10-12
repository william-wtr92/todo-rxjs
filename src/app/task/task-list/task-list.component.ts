import {Component, OnInit} from '@angular/core';
import {ITask} from "../task";
import {Router} from "@angular/router";
import {TaskService} from "../task.service";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: []
})
export class TaskListComponent implements OnInit {
  public taskList: ITask[];
  public filterValue: boolean = false;
  public taskLength: number;
  public taskNotValidLength: number;
  public logoutValue: boolean;

  constructor(private router: Router, private taskService: TaskService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.taskService.getTaskList().subscribe(taskList => this.taskList = taskList);
    this.taskService.getTaskList().subscribe(taskList => this.taskLength = taskList.length);
    this.taskService.getTaskList().subscribe(taskList => this.taskNotValidLength = taskList.filter(task => !task.validate).length);
  }

  handleDelete(id: number): void {
    this.taskService.deleteTask(id).subscribe();
    this.taskService.getTaskList().subscribe(taskList => this.taskList = taskList)
    this.taskService.getTaskList().subscribe(taskList => this.taskLength = taskList.length);
    this.taskService.getTaskList().subscribe(taskList => this.taskNotValidLength = taskList.filter(task => !task.validate).length);

  }

  handleSearch(name: string): void{
    if(name.length > 2){
      this.taskService.searchTask(name).subscribe(taskList => this.taskList = taskList);
    } else if(name.length === 0){
      this.taskService.getTaskList().subscribe(taskList => this.taskList = taskList)
    }
  }

  getFilter(): void {
    if (!this.filterValue) {
      this.taskService.getTaskList().subscribe(taskList => this.taskList = taskList.filter(task => !task.validate));
      this.filterValue = !this.filterValue
    } else {
      this.taskService.getTaskList().subscribe(taskList => this.taskList = taskList)
      this.filterValue = !this.filterValue
    }
  }

  goToTask(task: ITask): void {
    this.router.navigate(['/task', task.id])
  }

  handleLogout(): void{
    this.logoutValue = !this.logoutValue;
  }

  logOut(): void{
    this.authService.logOut();
    this.router.navigate(["/login"])
  }
}
