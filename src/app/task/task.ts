export class ITask {
  id: number;
  name: string;
  created: Date;
  hidden: boolean;
  validate: boolean;
  type: string[];

  constructor(
    id: number,
    name: string,
    created: Date,
    hidden: boolean,
    validate: boolean,
    type: string[]
) {
    this.id = id;
    this.name = name;
    this.created = created;
    this.hidden = hidden;
    this.validate = validate;
    this.type = type;
}
}
