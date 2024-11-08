import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Button } from '@mui/material';
import axios from 'axios';
import photo from "../logo.svg"
// import MuiCards from "./MuiCards"

function Cards() {
  const [expanded, setExpanded] = useState("");


  const handleExpandClick = (productId) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [productId]: !prevExpanded[productId],
    }));
  };
  const [products, setProducts] = useState([])
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`https://vercel-api-deployment.vercel.app/api/v1/product/get-product`)
      if (data.success) {
        setProducts(data.products)
      }
    } catch (error) {
      console.log('error in product getting')
    }
  }
  useEffect(() => {
    getAllProducts()
  }, [])
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
        <Typography variant='h4' className='text-center'>Card</Typography>

          {products.slice(0, 3).map((p) => (
            <div className='col-md-4 mt-3' key={p._id}>


              <Card >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} >
                      {p.name.substring(0, 1)}</Avatar>
                  }

                  title={p.name}
                  subheader=""
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={photo}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    price:  {p.price}$
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button sx={{ background: "lightblue" }} className='mx-2' >Add to cart</Button>
                  <Button
                    expand={expanded[p?._id]}
                    onClick={() => handleExpandClick(p?._id)}
                    aria-expanded={expanded[p?._id]}
                    aria-label="show more"
                    sx={{ background: "lightgray" }}
                  >
                    view Details
                  </Button>
                </CardActions>
                <Collapse in={expanded[p?._id]} timeout="auto" unmountOnExit>
                  <CardContent>

                    <Typography paragraph>
                      {p.description}
                    </Typography>

                  </CardContent>
                </Collapse>
              </Card>

            </div>
          ))}
            // <Typography gutterBottom sx={{textAlign:"center" , fontWeight:"bold"}}> Card - 2 </Typography>
            // <MuiCards/>
        </div>
      </div>


    </>
  )
}

export default Cards
