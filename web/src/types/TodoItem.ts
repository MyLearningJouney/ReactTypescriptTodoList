export interface TodoItem {
  todo: string;
  createdDate: string;
  completedDate: string;
  status: "pending" | "editing" | "completed";
  id: string;
}
