"use client"
import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia} from '@mui/material';

const techStackData = [
    { name: 'React', color: 'white', image: '/imgs/react-svgrepo-com.svg' },
    { name: 'Java', color: 'white', image: '/imgs/java-svgrepo-com.svg'},
    { name: 'Material UI', color: 'white', image:'/imgs/materialui-svgrepo-com.svg' },
    { name: 'Tailwind CSS', color: 'white', image: '/imgs/tailwindcss-svgrepo-com.svg' },
    { name: 'JavaScript', color: 'white', image: '/imgs/javascript-svgrepo-com.svg' },
    { name: 'Python', color: 'white', image: '/imgs/python-svgrepo-com.svg' },
    { name: 'NodeJS', color: 'white', image: '/imgs/node-svgrepo-com.svg' },
    { name: 'NextJS', color: 'white', image: '/imgs/nextjs-icon-svgrepo-com.svg' },


    // add more technologies here
  ];
    //cardMedia have to use manual styling

  //TODO:
  //Color the cards, give them a font, resize the imgs on a smaller screen
  //bg-${tech.color}-100 text-${tech.color}-700

function TechStack() {
    return (
    <>
      <div>
        <h1 className='text-center text-2xl font-semibold'>Tech Stack:</h1>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Grid container spacing={3} justifyContent="center">
          {techStackData.map((tech, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Card sx={{backgroundColor: tech.color}} className={`rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-row items-center`}> 
                <CardMedia component="img" sx={{ width: 63 }} image={tech.image} alt={tech.name} className="p-2"/>
                <CardContent>
                  <Typography className="font-medium">
                    {tech.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
      );
}

export default TechStack;