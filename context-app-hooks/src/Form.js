import React, { useContext } from 'react'
import { Avatar, Button, CssBaseLine, FormControl, FormControlLabel, Checkbox, Input, InputLabel, Paper, Typography, MenuItem, Select } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/FormStyles';
import { LanguageContext } from './context/LanguageContext';

const dictionary = {
  english: {
    signIn: 'Sign In',
    email: "Email Address",
    password: 'Password',
    remember: 'Remember Me'
  },
  french: {
    signIn: 'Se Connecter',
    email: "Adresse Èlectronique",
    password: 'Mot de Passe',
    remember: "Souviens-toi De Moi"
  },
  spanish: {
    signIn: "Registrarse",
    email: "Correo Electronico",
    password: "Contraceña",
    remember: 'Recuérdame'
  }
}

function Form(props) {
    const { classes } = props;
    const { language, setLanguage } = useContext(LanguageContext);
    const { email, signIn, remember, password } = dictionary[language];
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant='h5'>{signIn}</Typography>
        <Select value={language} onChange={setLanguage}>
          <MenuItem value='english'>English</MenuItem>
          <MenuItem value='spanish'>Spanish</MenuItem>
          <MenuItem value='french'>French</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>{email}</InputLabel>
            <Input id='email' name='email' autoFocus></Input>
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>{password}</InputLabel>
            <Input id='password' name='password' autoFocus></Input>
          </FormControl>
          <FormControlLabel 
            control={<Checkbox color='primary' />} 
            label={remember}
          />
          <Button 
            variant="contained" 
            type='submit' 
            fullWidth 
            color='primary' 
            className={classes.submit}
          >
            {signIn}
          </Button>
        </form>
      </Paper>
    </main>
  )
}

export default withStyles(styles)(Form);