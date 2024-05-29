import {  Button, Card, CardActions, CardContent, CardHeader, CardMedia, Modal, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import photo from "../logo.svg"



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 335,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};
function Modalpage() {
  const [open, setOpen] = useState(null)
  const handleOpen = (id) => {
    setOpen(id)
  }
  const handleClose = () => setOpen(null);

  //all projects
  const [projects, setProjects] = useState([])

  const getAllProjects = async () => {
    try {
      const { data } = await axios.get(
        `https://personal-portfolio-api-s.vercel.app/api/v1/project/get-project`);
      if (data?.success) {
        setProjects(data?.projects)

        console.log("project got Successfully");
      }
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    getAllProjects()
  }, [])

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <Typography variant='h4' className='text-center'>Modal</Typography>
          {
            projects.slice(0, 3).map((p) => (
              <div className='col-md-4 mt-3' key={p?._id}>
                <Card >

                  <CardHeader title={p.name} sx={{ color: "darkorange", textWrap: "nowrap" }} />


                  <CardMedia height="194" component="img"
                    image={photo} />
                  <CardContent>
                    <Typography>
                      {p.description.substring(0, 30)}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>

                    <Button sx={{ background: " skyblue" }} className='mx-2'><NavLink to={p.link} className="navlink">Click to explore</NavLink></Button>
                    <Button sx={{ background: "lightgray" }} onClick={() => handleOpen(p._id)} >view Details </Button>
                  </CardActions>

                  <Modal open={p._id === open} onClose={handleClose}>
                    <Card sx={style} borderRadius="1rem">
                      <CardMedia height="200" width="200" sx={{ objectFit: "contain" }} component="img"
                        image={photo} />

                      <Typography >project name : <b>{p.name}</b> </Typography>
                      <Typography >description : {p.description}  </Typography>

                      <Button sx={{ background: " skyblue" }} className='mx-2'>
                        <NavLink to={p.link} className="navlink" target='_blank'
                          rel='noopener noreferrer'>Click to explore</NavLink>
                      </Button>
                      <Button sx={{ background: " pink" }} className='mx-2' onClick={handleClose}>
                        Cancell
                      </Button>

                    </Card>

                  </Modal>

                </Card>

              </div>
            ))
          }
        </div>
      </div>


    </>
  )
}

export default Modalpage
