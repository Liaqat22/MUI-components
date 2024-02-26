import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import SignMain from './SignMain';
import { Link } from '@mui/material';
import axios from 'axios';

function Signup() {
const [email , setEmail] = useState('')
const [password , setPassword] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
        const data = await axios.post("https://vercel-api-deployment.vercel.app/api/v1/auth/login" , {email , password} )

         } catch (error) {
        console.log(error)
      }
    }
  return (
    <>

    <SignMain>
     
            <Typography component="h1" variant="h5" color="primary.main" sx={{textAlign:"center"}} >
        Sign up
      </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 ,fontFamily:"Poppins,sans-serif"}}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="Name"
              label="Full Name"
              name="Name"
              autoComplete="Name"
              autoFocus
             
            />
         
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputLabelProps={{className:'TextField'}}
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
              InputLabelProps={{className:'TextField'}}
              onChange={(e)=>setPassword(e.target.value)}

            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="phone"
              autoFocus
             
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,fontFamily:"Poppins, sans-serif" }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                </Link>
              </Grid>
              <Grid item>
                
                <NavLink to ="/" variant="body2">
                  {"Already have an account? Sign In"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        
          </SignMain>
        
       
    </>
  )
}

export default Signup
