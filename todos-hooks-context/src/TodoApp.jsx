import React, { useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { Typography, AppBar, Grid, Toolbar, Paper} from '@material-ui/core';
import { TodosProvider } from './context/todos.context';

function TodoApp() {
  const initialState = [
    {id: 1, task: 'Clean Fishtank', completed: false},
    {id: 2, task: 'Grow beard', completed: true},
    {id: 3, task: 'Eat dinner', completed: false},
  ];

  return (
    <Paper style={{
      padding: 0,
      margin: 0,
      backgroundColor: "#fafafa",
      height: '100vh'
    }}
    elevation={0}
    >
      <AppBar color='primary' position='static' style={{height: '64px'}}>
        <Toolbar>
          <Typography color='inherit'>Todos with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{marginTop: '1rem'}}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
          
        </Grid>
      </Grid>
      
    </Paper>
    
  )
}

export default TodoApp;