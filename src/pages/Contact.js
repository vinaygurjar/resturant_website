import React from 'react'
import Layout from '../components/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4":{ fontWeight: "bold", mb: 2 } }}>
        <Typography variant='h4'>
          Contact My Resturant
        </Typography>
        <p>
        We cannot deny the importance of food in our lives. 
        As it is the basic need to survive. Yet some people waste 
        not thinking that there are still some people that do not 
        get any of it. We should always be careful while taking a 
        meal on our plates.

        In other words, we should take only that much that our stomach 
        can allow. Or else there will be wasting of food. In India there 
        are many people living in slums, they do not have proper shelter. 
        Moreover, they are not able to have even a one-time meal. 
        They starve for days and are always in a state of sickness.
        </p>
      </Box>
      <Box sx={{ m: 3, width:"600px", ml: 10, "@media (max-width:600px)":{
        width: "300px",
      }, }}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "black", color: "white" }} align='center'>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                   <SupportAgentIcon sx={{ color: "red", pt: 1}}/> 1800-00-0000 (Tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                   <MailIcon sx={{ color: "skyblue", pt: 1}}/> help@myrest.com 
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                   <CallIcon sx={{ color: "green", pt: 1}}/> 9926031678 
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact;
