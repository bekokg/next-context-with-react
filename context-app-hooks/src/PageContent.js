import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext';

export default function PageContent(props) {

    const { isDarkMode } = useContext(ThemeContext);
    
    const styles = {
      backgroundColor: isDarkMode ? '#3f51b5' : "white",
      height: '100vh',
      width: '100vw'
    }
    return (
      <div style={styles}>
        {props.children}
      </div>
    )
}
