import axios from 'axios'
import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useReducer } from 'react';
import { reducer } from './Reducer/UseReducer';
import { Typography } from '@mui/material';




const initialState = {
APIdata : [],
parameters :[]
}

function Tables() {

    const [state,dispatach] = useReducer(reducer , initialState)

    const dataGet  = async () =>{
        try {
            const {data} = await axios.get("https://api.openaq.org/v2/locations/2178" , Headers={"X-API-Key": "my-openaq-api-key-12345-6789"})

            dispatach({type : "results" , payload : data?.results})
            dispatach({type : "parameters" , payload : data?.results.map((p)=>p.parameters)})
            console.log( data?.results)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        dataGet()
    },[])
  return (
    <>
      <div className='container-fluid'>
       
      {state?.APIdata.map((r) => ( 
        <div className='row d-flex justify-content-center ' key={r.id}>
           
          <div className='col-md-10'>
                <Typography variant='h6' align='center' fontWeight= "700" mb= {1}>Gernal info</Typography>
            <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}  aria-label="simple table">
            
         
       <TableHead bgcolor = "lightgray">               
          <TableRow >
            <TableCell sx={{fontWeight:"700"}}>NAME</TableCell>
          <TableCell  sx={{fontWeight:"700"}}>COUNTRY</TableCell>
          <TableCell  sx={{fontWeight:"700"}}>CITY</TableCell>
          </TableRow>
       </TableHead>
      
        <TableBody>
            <TableRow
              key={r.id}>
            
              <TableCell >  {r.name}  </TableCell>
              <TableCell >{r.country}</TableCell>
              <TableCell >{r.city}</TableCell>

            </TableRow>
       
        </TableBody>
      </Table>
      </TableContainer>
        </div>
          <div className='col-md-10 mt-3'>
                <Typography variant='h6' align='center' fontWeight= "700" m= {1}>Manufacturer info</Typography>
            <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}  aria-label="simple table" >
            
         
       <TableHead bgcolor = "lightgray">               
          <TableRow >
            <TableCell sx={{fontWeight:"700"}}>Manufacturer Name</TableCell>
          <TableCell  sx={{fontWeight:"700"}}>Model NAME</TableCell>
          </TableRow>
       </TableHead>
        <TableBody>

        {r.manufacturers.map((m)=>(
          <TableRow key = {m.manufacturerName}>

            <TableCell  >{m.manufacturerName}</TableCell>
            <TableCell  >{m.modelName}</TableCell>

          </TableRow>
            ))}
       
        </TableBody>
      </Table>
      </TableContainer>
        </div>

          <div className='col-md-10 mt-3'>
                <Typography variant='h6' align='center' fontWeight= "700" m= {1}>Parameters</Typography>
            <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}  aria-label="simple table" >
            
         
       <TableHead bgcolor = "lightgray">               
          <TableRow >
            <TableCell align='center' sx={{fontWeight:"700"}}>Parameter ID</TableCell>
            <TableCell sx={{fontWeight:"700"}}>Display Name</TableCell>
          <TableCell   sx={{fontWeight:"700"}}>Parameter</TableCell>
          <TableCell   sx={{fontWeight:"700"}}>Unit</TableCell>
          <TableCell   sx={{fontWeight:"700"}}>Count</TableCell>
          <TableCell   sx={{fontWeight:"700"}}>Average</TableCell>
          <TableCell   sx={{fontWeight:"700"}}>Last value</TableCell>
          </TableRow>
       </TableHead>
        <TableBody>

        {r.parameters.map((p)=>(
          <TableRow key = {p.id}>

            <TableCell  >{p.parameterId}</TableCell>
            <TableCell  >{p.displayName}</TableCell>
            <TableCell  >{p.parameter}</TableCell>
            <TableCell  >{p.unit}</TableCell>
            <TableCell  >{p.count}</TableCell>
            <TableCell  >{p.average}</TableCell>
            <TableCell  >{p.lastValue}</TableCell>

          </TableRow>
            ))}
       
        </TableBody>
      </Table>
      </TableContainer>
        </div>
        
        </div>
        ))}
      </div>
     
    </>
  )
}

export default Tables
