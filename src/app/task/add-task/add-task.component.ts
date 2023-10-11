import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TaskService} from "../task.service";
import {ITask} from "../task";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: []
})
export class AddTaskComponent implements OnInit{
  public newId: number;
  public types: string[];
  public task: ITask;

  constructor(private taskService: TaskService, private router: Router) {
  }

  ngOnInit(): void {
    this.types = this.taskService.getTaskType();
    this.taskService.getTaskList().subscribe(taskList => this.newId = +taskList.slice(-1).map(task => task.id).toString())

    this.task = {
      id: this.newId,
      name: '',
      created: new Date(),
      hidden: false,
      validate: false,
      type: []
    };
  }

  hasType(type: string): boolean {
    return this.task.type.includes(type);
  }

  isValid(type: string): boolean {
    if (this.task.type.length === 1 && this.hasType(type)) {
      return false;
    }

    if (this.task.type.length > 1 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  selectType($event: Event, type: string): void {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.task.type.push(type);
    } else {
      const index = this.task.type.indexOf(type);
      this.task.type.splice(index, 1)
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const newTask: ITask = {
        id: this.newId + 1,
        name: this.task.name,
        created: new Date(),
        hidden: false,
        validate: false,
        type: this.task.type
      };

      this.taskService.addTask(newTask).subscribe();

      this.router.navigate(['/tasks']);
    }
  }


}
