import React from 'react'
import { AppBar,Toolbar,Typography } from '@mui/material'
import {MenuIcon,IconButton} from "@mui/icons-material"
const Header = () => {
  return (
    <div style={{height:'17vh'}}>
        <AppBar position="static" style={{height:"12vh"}} >
          <Toolbar variant="dense">   
          <Typography variant="h6" color="inherit" component="div" style={{display:"flex",alignItems:"center",marginTop:"2%"}}>Our Shop</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header