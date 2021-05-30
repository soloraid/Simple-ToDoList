export class Task{
  id: number
  title: string;
  Done: boolean;


  constructor(title: string, id: number) {
    this.title = title;
    this.Done = false;
    this.id = id;
  }

}
