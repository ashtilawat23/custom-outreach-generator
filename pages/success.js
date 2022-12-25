import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import styles from '../styles/Success.module.css'
import Header from '../components/header'
import Footer from '../components/footer'

const Success = () => {
  return (
    <Box>
        <Header />
            <Box className={styles.container}>
            <Typography variant='h2' sx={{mb:'5vh'}}>Success</Typography>
            <Typography variant='h5'>
                Thank you for your purchase! Your messages are on the way. Check your email in the next 20 minutes. 
            </Typography>
            </Box>
        <Footer />
    </Box>
  )
}

export default Success