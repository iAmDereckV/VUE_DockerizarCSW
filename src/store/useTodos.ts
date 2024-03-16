import { TodoStatus, type Todo } from "@/types";
import { reactive, computed } from "vue";

interface TodoStore {
  [TodoStatus.Pending]: Todo[];
  [TodoStatus.InProgress]: Todo[];
  [TodoStatus.Completed]: Todo[];
}

const defaultVal = {
  [TodoStatus.Pending]: [
    {
      id: 1,
      title: "Learn Vuejs",
      description: "Watch codepanion videos",
      status: TodoStatus.Pending,
    },
  ],
  [TodoStatus.InProgress]: [],
  [TodoStatus.Completed]: [],
};

const todoStore = reactive<TodoStore>(defaultVal);

export default () => {
  const getTodosByStatus = (todoStatus: TodoStatus) => {
    return computed(() => todoStore[todoStatus]);
  };

  const updateTodo = (todo: Todo, newStatus: TodoStatus) => {
    todo.status = newStatus;
  };

  const addNewTodo = (todo: Todo) => {
    todoStore[todo.status].push(todo);
  };

  const deleteTodo = (todoToDelete: Todo) => {
    todoStore[todoToDelete.status] = todoStore[todoToDelete.status].filter(
      (todo) => todo.id !== todoToDelete.id
    );
  };

  return { getTodosByStatus, addNewTodo, deleteTodo, updateTodo };
};
