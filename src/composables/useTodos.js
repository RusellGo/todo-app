import { onMounted, ref } from "vue";
export default function useTodos() {
  const todos = ref([]);
  const addTodo = (todo) => todos.value.push(todo);

  /**
   * 使用远程的TodoList示例
   */
  const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const rawTodos = await response.json();
    todos.value = rawTodos.map(todo => ({ id: todo.id, content: todo.title, compltet: todo.completed }));
  }

  onMounted(() => {
    fetchTodos();
  })

  return {
    todos,
    addTodo
  };
}