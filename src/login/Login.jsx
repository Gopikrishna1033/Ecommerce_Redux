import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import {Link} from "react-router-dom"
import useStyles from './styles'

const Login = () => {
  const classes = useStyles()
  const [username,setusername] = useState({username:"",password:""})
  const [error,seterror] = useState("")
  const handleUser = (event)=>{
    const {name,value} = event.target
    setusername({...username,[name]:value})
    const user = /^[A-Za-z0-9!@$&*^$#()]{8,20}$/  
    if(name==="password"){
    if(!user.test(value)){
      seterror("Username must be in length of 8 to 20 characters")
    }
    else{
      seterror("")
    }}
  }
  return (
    <div>
        <Box component={"form"}
            sx={{display:"flex",
                 flexDirection:"column",
                 width:"25vw",
                 gap:"3vh",
                 margin:"auto",
                 height:"70vh",
                 justifyContent:"center",
                 alignItems:"center"
            }}  
            autoComplete='off'
        >
                      
            <TextField 
            label=" Username"
            required
            name='username'
            onChange={handleUser}
            value={username.username}
            fullWidth
            
            />
            <TextField
            label = "Password"
            name = "password"
            value={username.password}
            onChange={handleUser}
            helperText={error}
            error={!!error}
            required
            fullWidth
            
            />
            <Button variant='contained' fullWidth>Login</Button>
            {console.log(username,"username")}
            <Typography variant='body2' >Don't have an account? <Link to={"/signup"} className={classes.signup}>Sign up</Link> </Typography>
        </Box>
    </div>
  )
}

export default Login
