import { Box, Card, CardContent, Grid2, Typography } from '@mui/material'
import React from 'react'

function MuiCards() {
    const cars = [
        {
          carname: "Ferrari SF90 Stradale",
          imgurl: "https://static.vecteezy.com/system/resources/thumbnails/023/192/562/small_2x/sport-car-running-on-the-road-in-future-city-created-with-generative-ai-free-photo.jpg",
          description: "The Ferrari SF90 Stradale is a hybrid supercar that delivers incredible performance with its 4.0-liter twin-turbo V8 engine and three electric motors, producing a combined 986 horsepower. It can accelerate from 0 to 60 mph in just 2.5 seconds and has a top speed of 211 mph."
        },
        {
          carname: "Ferrari SF90 Stradale",
          imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwGQEZ10Kl5DK4wvsgXDuFFaoL0Ky82j-BQ&s",
          description: "The Ferrari SF90 Stradale is a hybrid supercar that delivers incredible performance with its 4.0-liter twin-turbo V8 engine and three electric motors, producing a combined 986 horsepower. It can accelerate from 0 to 60 mph in just 2.5 seconds and has a top speed of 211 mph."
        },
        {
          carname: "Lamborghini Huracán Evo",
          imgurl: "https://di-uploads-pod12.dealerinspire.com/universitydodgeram/uploads/2018/07/2018-Dodge-Challenger-SRT-Demon-University-Dodge.jpg",
          description: "The Lamborghini Huracán Evo features a 5.2-liter V10 engine that generates 640 horsepower, allowing it to sprint from 0 to 60 mph in 2.9 seconds. It offers advanced aerodynamics and Lamborghini's signature aggressive design, making it both a powerful and stylish sports car."
        },
        {
          carname: "McLaren 720S",
          imgurl: "https://media.istockphoto.com/id/147557453/photo/sports-car.jpg?s=1024x1024&w=is&k=20&c=_lYIt_orSZGkfbSYygZU6MhhjsMGoeSMKwtUdZ5-OUU=",
          description: "The McLaren 720S is an impressive supercar equipped with a 4.0-liter twin-turbocharged V8 engine that produces 710 horsepower. It boasts a top speed of 212 mph and can reach 60 mph in 2.8 seconds. The car's lightweight construction and aerodynamic design make it a true track performer."
        }
      ];
      
    return (
        <>
            <Grid2 container spacing={2} columns={12}>
                {cars?.map((c,i)=>(

              
                <Grid2 size={{ xs: 12, sm: 6, md: 3 }} component={Card} boxShadow="none" key={i}>
                    <Box sx={{
                        backgroundImage: `url(${c?.imgurl})`, backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "200px",
                        width: "100%",
                        backgroundPosition: "center",
                        padding: "1rem",
                        display: "flex", justifyContent: "space-around", alignItems: "flex-end", flexDirection: "column", position: "relative"
                    }}>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust opacity and color here
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                flexDirection: 'column',
                                color: 'white', // Optional: make icons white for visibility
                                padding: '1rem 2rem',
                            }} >
                       
                            <i className='fa-solid fa-heart' />
                            <Box display="flex" justifyContent="space-between" flexDirection="column" minHeight="100px">
                                <i className='fa-solid fa-eye' />
                                <i className='fa-solid fa-share' />
                                <i className='fa-solid fa-smile' />

                            </Box>
                        </Box>
                    </Box>
                    <CardContent >
                        <Box>

                        <Typography gutterBottom>{c?.carname}</Typography>
                        <Typography variant='body2'>{c?.description?.substring(0,50)}</Typography>
                        </Box>
                    </CardContent>
                </Grid2>
                  ))}
            </Grid2>
            {/* <Box width={450}>
              
            </Box> */}
        </>
    )
}

export default MuiCards