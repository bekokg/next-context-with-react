import useLocalStorageState from './useLocalStorageState';
import uuid from 'uuid/v4';
export default initialTodos => {
  const [todos, setTodo ] = useLocalStorageState("todos", initialTodos);
  return {
    todos,
    addTodo: newTodoText => {
      setTodo([...todos, {id: uuid(), task: newTodoText, completed: false}]);
    },
    removeTodo: id => {
      const filteredTodos = todos.filter(todo => todo.id !== id);
      setTodo(filteredTodos);
    },
    toggleTodo: id => {
      const updatedTodos = todos.map(todo => 
          todo.id === id ? {...todo, completed: !todo.completed} : todo
        );
        setTodo(updatedTodos);
    },
    updateTodo: (id, newTodo) => {
      const updatedTodos = todos.map(todo => 
          todo.id === id ? {...todo, task: newTodo}: todo
        );
      setTodo(updatedTodos);
    }
  }
}