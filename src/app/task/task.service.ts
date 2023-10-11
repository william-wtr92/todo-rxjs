import {Injectable} from '@angular/core';
import {ITask} from "./task";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {
  catchError,
  Observable,
  of,
  tap
} from "rxjs";

@Injectable()
export class TaskService {
  public taskTypes: string[] = ["Urgent", "Modéré", "Simple"];

  constructor(private http: HttpClient) {
  }

  private log(response: ITask[] | ITask | undefined): void {
    console.log(response)
  }
  private error(error: Error, errorValue: any){
    console.log(error);
    return of(errorValue);
  }

  getTaskList(): Observable<ITask[]> {
    return this.http.get<ITask[]>('api/tasks').pipe(
      // tap((response) => this.log(response)),
      catchError((error) => this.error(error, []))
    );
  }

  getTaskById(id: number): Observable<ITask | undefined> {

    return this.http.get<ITask>(`api/tasks/${id}`).pipe(
      // tap((task) => this.log(task)),
      catchError((error) =>  this.error(error, undefined))
    );
  }

  getTaskType(): string[] {
    return this.taskTypes.map(type => type);
  }

  deleteTask(id: number): Observable<ITask | undefined> {

    return this.http.delete<ITask>(`api/tasks/${id}`)
  }

  updateTask(id: number, task: ITask): Observable<ITask>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }

    return this.http.put<ITask>(`api/tasks/${id}`, task, httpOptions);
  }

  addTask(task: ITask): Observable<ITask> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }

    return this.http.post<ITask>(`api/tasks`, task, httpOptions);
  }

  searchTask(name: string): Observable<ITask[]>{
    return this.http.get<ITask[]>(`api/tasks/?name=${name}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.error(error, []))
    );
  }
}
