import {Component, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import {ITask} from "../task";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-edit-task',
    templateUrl: './edit-task.component.html'
})
export class EditTaskComponent implements OnInit {
    public taskDetail: ITask | undefined;

    constructor(private route: ActivatedRoute, private taskService: TaskService) {
    }

    ngOnInit(): void {
        const taskId: string | null = this.route.snapshot.paramMap.get('id');

        if (taskId) {
           this.taskService.getTaskById(+taskId).subscribe(task => this.taskDetail = task);
        } else{
            this.taskDetail = undefined;
        }
    }
}
