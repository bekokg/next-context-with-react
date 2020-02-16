import React, { useContext } from 'react';
import { DispatchContext } from './context/todos.context';
import {TextField } from '@material-ui/core';
import useInputState from './hooks/useInputState';

const EditForm = ({task,toggle, id}) => {
  const [value, handleChange, reset] = useInputState(task)
  const dispatch = useContext(DispatchContext)
  return (
    <form onSubmit={e => {
      e.preventDefault();
      dispatch({type: 'EDIT', id: id, newTask: value});
      reset();
      toggle();
    }}>
      <TextField 
        value={value} 
        onChange={handleChange} 
        fullWidth 
        margin='normal'
      />
    </form>
  )
}

export default EditForm;