import React from 'react'
import { AppBar,Toolbar,Typography } from '@mui/material'
import useStyles from './Styles'
const Header = () => {
  const classes = useStyles()
  return (
    <div style={{height:'17vh'}}>
        <AppBar position="static" style={{height:"12vh"}} >
          <Toolbar variant="dense">   
          <Typography variant="h6" color="inherit" component="div" className={classes.logo}>Our Shop</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header