import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my: 15,
        textAlign: "center",
        p: 2,
        "& h4":{
          fontWeight: "bold",
          my: 2,
          fontSize: "2rem",
        },
        "& p":{
          textAlign: "justify",
        },
        "@media (max-width:600px)":{
          mt: 0,
          "& h4":{
            fontSize: "1.5rem",
          }
        }
      }}>
        <Typography variant="h4">
          Welcome To My Resturant
        </Typography>
        <p>Food is the substance we eat every day for energy and strength. 
           There are many different types of food, such as fruits, vegetables, 
           rice, and pasta. We need to eat a variety of foods to get all the 
           essential nutrients the body needs. Not eating a healthy and balanced 
           diet leads to weakness and deficiency diseases.
           Food is the basic human need to stay alive. Moreover, it is the 
           need of every living organism. Therefore it is important that we should 
           not waste food. Our world consists of different types of cultures. 
           These cultures have varieties of dishes of food in them.
           Thus, all the dishes have different taste. Furthermore, our nature 
           provides us a variety of food. From fruits to vegetables, from Dairy 
           food to seafood everything is available. Different countries have 
           their own specialty of dishes.
        </p>
        <br />
        <p>Food is the substance we eat every day for energy and strength. 
           There are many different types of food, such as fruits, vegetables, 
           rice, and pasta. We need to eat a variety of foods to get all the 
           essential nutrients the body needs. Not eating a healthy and balanced 
           diet leads to weakness and deficiency diseases.
           Food is the basic human need to stay alive. Moreover, it is the 
           need of every living organism. Therefore it is important that we should 
           not waste food. Our world consists of different types of cultures. 
           These cultures have varieties of dishes of food in them.
           Thus, all the dishes have different taste. Furthermore, our nature provides 
           us a variety of food. From fruits to vegetables, from Dairy food to seafood 
           everything is available. Different countries have their own specialty of dishes.
           </p>
      </Box>
    </Layout>
  )
}

export default About;
