export enum TodoStatus {
  Pending = "pending",
  InProgress = "inProgress",
  Completed = "completed",
}

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: TodoStatus;
}
