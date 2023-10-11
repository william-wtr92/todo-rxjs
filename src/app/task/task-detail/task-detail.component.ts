import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ITask} from "../task";
import {TaskService} from "../task.service";

@Component({
    selector: 'app-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: []
})
export class TaskDetailComponent implements OnInit {
    public taskDetail: ITask | undefined;
    constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) {
    }
    ngOnInit(): void {
        const taskId: string | null = this.route.snapshot.paramMap.get('id');

        if(taskId){
            this.taskService.getTaskById(+taskId).subscribe(task => this.taskDetail = task)
        }
    }

    goBack(): void {
        this.router.navigate(['/']);
    }
}
