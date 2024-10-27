import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
const Login = () => {
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
            fullWidth
            
            />
            <TextField
            label = "Password"
            required
            fullWidth
            />
            <Button variant='contained' fullWidth>Login</Button>
            <Typography variant='body2'>Don't have an account? Sign up</Typography>
        </Box>
    </div>
  )
}

export default Login
