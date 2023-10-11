import {ITask} from "./task";

export const TaskList : ITask[] = [
  {
    id: 1,
    name: "My First Task",
    created: new Date(),
    hidden: false,
    validate: false,
    type: ["Urgent"]
  },
  {
    id: 2,
    name: "My Second Task",
    created: new Date(),
    hidden: false,
    validate: true,
    type: ["Modéré"]
  },
  {
    id: 3,
    name: "My Third Task",
    created: new Date(),
    hidden: false,
    validate: false,
    type: ["Simple"]
  },
]
