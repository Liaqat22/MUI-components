import React from 'react'
import { Avatar, Box, Container } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function SignMain({children}) {
  return (
    <>
    <div className='container-fluid'>

   
       <Container component="main" maxWidth="sm">
        <Box className=' signinCol'
          sx={{
            marginTop: 5,
            marginBottom: 4,
          paddingLeft:2,
          paddingRight:2,
          paddingTop:3,
          paddingBottom:3,
borderRadius:3
          }}>

            <Box display="flex" justifyContent="center" alignItems="center">
              <Avatar sx={{ background: "red" }} >
                <LockOutlinedIcon />
              </Avatar>
            </Box>

<main>{children}</main>

            </Box>
      </Container>
      </div>
    </>
  )
}

export default SignMain
