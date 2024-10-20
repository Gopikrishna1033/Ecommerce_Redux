import React from 'react'
import { AppBar,Toolbar,Typography,TextField } from '@mui/material'
import useStyles from './Styles'
const Header = () => {
  const classes = useStyles()
  return (
    <div style={{height:'17vh'}}>
        <AppBar position="static" style={{height:"12vh"}} >
          <Toolbar variant="dense" >   
            <div style={{display:"flex",justifyContent:"space-around",width:"100vw",marginTop:"1%"}}>
          <Typography variant="h6" color="inherit"  /* style={{display:"flex",alignItems:"center",marginTop:"2%"}} */ className={classes.logo}>Our Shop</Typography>
          <TextField
            placeholder='Search...'
            sx={{width:"50vw",border:"none",bgcolor:"white"}}
          />
          <Typography className={classes.logo}>Login</Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header