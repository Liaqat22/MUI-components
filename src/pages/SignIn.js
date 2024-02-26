import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink, useNavigate } from 'react-router-dom';
import SignMain from './SignMain';
import axios from 'axios';
import { useAuth } from '../Context';

function SignIn() {


  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const navigate = useNavigate()
  const [user , setUser] = useAuth()
  
      const handleSubmit = async(e) => {
          e.preventDefault();
          try {
           const {data} = await axios.post("https://vercel-api-deployment.vercel.app/api/v1/auth/login" ,{ email , password })
          console.log(data.user)
          setUser({...user , userinfo : data.user})
          localStorage.setItem("USER" , JSON.stringify(data.user))
navigate("/signup")

         } catch (error) {
          console.log(error)
         }
        };
  return (
    <>
    <SignMain>

           
            <Typography component="h1" variant="h5" color="primary.main" sx={{textAlign:"center"}} >
        Sign in
      </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 ,fontFamily:"Poppins,sans-serif"}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
             onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>setPassword(e.target.value)}


            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
             
              
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,fontFamily:"Poppins, sans-serif" }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
            <NavLink>
            Forgot password?
              </NavLink>  

              </Grid>
              <Grid item>
              <NavLink to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        

       </SignMain>
    </>
  )
}

export default SignIn
