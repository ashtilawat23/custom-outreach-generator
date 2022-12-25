import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
   <Box className={styles.container}>
    <Typography variant='h8'>© 2022 Custom Outreach AI. All Rights Reserved.</Typography>
   </Box>
  )
}

export default Footer