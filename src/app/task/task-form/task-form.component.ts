import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import {ITask} from "../task";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: []
})
export class TaskFormComponent implements OnInit {
    @Input() task: ITask;
    public types: string[];

    constructor(private taskService: TaskService, private router: Router) {
    }

    ngOnInit(): void {
        this.types = this.taskService.getTaskType();
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
      this.taskService.updateTask(this.task.id, this.task).subscribe();

      this.router.navigate(['/tasks']);
    }
  }
}
