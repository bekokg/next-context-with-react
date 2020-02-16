import React, {createContext } from 'react';
import todoReducer from '../reducers/TodosReducer';
import uselocalStorageReducer from '../hooks/useLocalStorageReducer'
export const TodosContext = createContext();
export const DispatchContext = createContext();

const defaultTodos = [
  {id: 1, task: 'Mow the lawn using goats', completed: false},
  {id: 2, task: 'Release lady bugs into garden', completed: true}
]

export function TodosProvider(props) {
  const [todos, dispatch] = uselocalStorageReducer("todos", defaultTodos, todoReducer);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}