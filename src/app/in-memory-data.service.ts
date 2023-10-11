import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {TaskList} from "./task/task-mock";
import {ITask} from "./task/task";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {tasks :TaskList};
  }
}
