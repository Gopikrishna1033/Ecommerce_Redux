import React from 'react'
import { AppBar,Toolbar,Typography,TextField,Box } from '@mui/material'
import { Link } from 'react-router-dom'
import useStyles from './Styles'
const Header = () => {
  const classes = useStyles()
  return (
    <div style={{height:'17vh'}}>
        <AppBar position="sticky" sx={{height:"80px"}}>
          <Toolbar  > 
            <Box sx={{display:"flex",justifyContent:"space-between",width:"100%",marginTop:"10px"}}>  
              <Typography variant="h6" color="inherit"   className={classes.logo}>Our Shop</Typography>
                <TextField
                  placeholder='Search...'
                  sx={{width:"50vw",border:"none",bgcolor:"white",borderRadius:"5px","& .MuiOutlinedInput-root": {
                      "& fieldset": {
                      border: "none",
                        },
                      },}}
                />
              <Typography className={classes.logo}><Link to={"/login"} style={{textDecoration:"none",color:"inherit"}}>Login</Link></Typography> 
           </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header

{/* <div style={{display:"flex",justifyContent:"space-around",width:"100vw",marginTop:"1%"}}>
<Typography variant="h6" color="inherit"   className={classes.logo}>Our Shop</Typography>
<TextField
  placeholder='Search...'
  sx={{width:"50vw",border:"none",bgcolor:"white",borderRadius:"5px","& .MuiOutlinedInput-root": {
      "& fieldset": {
       border: "none",
        },
       },}}
/> */}