import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, Typography, InputBase, Switch, } from '@material-ui/core';
import SearchIcon  from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavbarStyles';
import { ThemeContext } from './context/ThemeContext';
import { withLanguageContext } from './context/LanguageContext';

const dictionary = {
  english: {
    search: "Search",
    flag: '🇬🇧'
  },
  french: {
    search: "Chercher",
    flag: "🇫🇷"
  },
  spanish: {
    search: 'Buscar',
    flag: '🇪🇸'
  }
}

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode, changeTheme } = this.context;
    const {classes} = this.props;
    const { language } = this.props.LanguageContext;
    const { search, flag } = dictionary[language]
    return(
      <div className={classes.root}>
        <AppBar position='static' color={isDarkMode ? "default" : 'primary'}>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit'>
              <span>{flag}</span>
            </IconButton>
            <Typography className={classes.title} variant='h6' color='inherit'>
              {language.toUpperCase()}
            </Typography>
            <Switch onChange={changeTheme}/>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`} 
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }} 
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
export default withLanguageContext(withStyles(styles)(Navbar));