import { TextField, Typography,Box, Button, InputAdornment } from '@mui/material'
import Grid from '@mui/material/Grid2';
import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useStyles from './styles';
const Signup = () => {
    const classes = useStyles()
    const [showpassword,setshowpassword] = useState(false)
    const [password,setpassword] = useState(false)
    const [phoneNumber,setphoneNumber] = useState("")
    const[error,seterror]=useState("")
    const phone=(event)=>{
        const value  = event.target.value
        setphoneNumber(value)
        if(value===""){
            seterror("")
            return
        }
        const validation = /^[6-9][0-9]{9}$/
        if(!validation.test(value)){
            if(phoneNumber.length>10){
            seterror("Please Check the number you have entered")
            }else{
            seterror("Invalid Number")
            }
        }else{
            seterror("")
        }
    }

    const handlepassword = ()=>{
        setshowpassword(!showpassword)
    }
    const handleconfirmpassword = ()=>{
        setpassword(!password)
    }
  return (
    <div>
        <Box className={classes.spaceTop}>
            <Grid container className={classes.root}>
                <Grid size={{xs:12,md:4}} >
                    <Typography variant='body1' className={classes.textfont}>UserName </Typography>
                    <TextField
                        className={classes.textfeild}
                    />
                </Grid>
                <Grid size={{xs:12,md:4}} >
                    <Typography variant='body1' className={classes.textfont}>Create Password </Typography>
                    <TextField
                        type={showpassword? "text":"password"}
                        className={classes.textfeild}
                        slotProps={{
                            input:{
                                    endAdornment:(
                                        <InputAdornment position='end'>
                                            {showpassword ?<VisibilityIcon onClick={handlepassword} style={{cursor:"pointer"}}/>:<VisibilityOffIcon onClick={handlepassword} style={{cursor:"pointer"}}/> }
                                            
                                        </InputAdornment>
                                    )
                            }
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
        <Box className={classes.spaceTopinner}>
            <Grid container className={classes.root}>
                <Grid size={{xs:12,md:4}} >
                    <Typography variant='body1' className={classes.textfont}>Confirm Password </Typography>
                    <TextField
                        type={password? "text":"password"}
                        className={classes.textfeild}
                        slotProps={{
                            input:{
                                    endAdornment:(
                                        <InputAdornment position='end'>
                                            {password ?<VisibilityIcon onClick={handleconfirmpassword} style={{cursor:"pointer"}}/>:<VisibilityOffIcon onClick={handleconfirmpassword} style={{cursor:"pointer"}}/> }
                                            
                                        </InputAdornment>
                                    )
                            }
                        }}
                    />
                </Grid>
                <Grid size={{xs:12,md:4}} >
                    <Typography variant='body1' className={classes.textfont} >Phone Number </Typography>
                    <TextField
                    helperText={error}
                    placeholder='Enter 10 digit mobile number '
                        error={!!error}
                        onChange={phone}
                        className={classes.textfeild}
                    />
                </Grid>
            </Grid>
        </Box>
        <Box className={classes.root}>
            <Button variant="contained" className={classes.btn} >Submit</Button>
        </Box>
    </div>
  )
}

export default Signup