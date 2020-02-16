import React, { useContext, memo } from 'react';
import { DispatchContext } from './context/todos.context';
import EditForm from './EditForm';
import useToggleState from './hooks/useToggleState';
import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

const Todo = ({task, id, completed}) => {
  const [isEditing, toggle ] = useToggleState(false);
  const dispatch = useContext(DispatchContext);
  return (
    <ListItem >
      {isEditing ? <EditForm task={task} id={id} toggle={toggle}/>:
      <>
      <Checkbox tabIndex={-1} checked={completed} onClick={()=> dispatch({type: "TOGGLE", id: id})}/>
      <ListItemText style={{textDecoration: completed ? 'line-through': 'none'}}>
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton area-label='Edit' onClick={toggle}>
          <Edit />
        </IconButton>
        <IconButton area-label='Delete' onClick={()=> dispatch({type: 'REMOVE', id: id})}>
          <Delete  />
        </IconButton>
      </ListItemSecondaryAction>
      </>}
    </ListItem>
  )
}
export default memo(Todo);