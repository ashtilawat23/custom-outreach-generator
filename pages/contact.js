import React from 'react'
import { Box } from '@mui/system'
import { Typography, TextField, Button } from '@mui/material'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  return (
    <Box sx={{backgroundColor:'#E8EBF7'}}>
        <Header />
        <Box className={styles.container}>
            <Typography variant='h2' sx={{mb:'5vh'}}>Contact</Typography>
            <TextField
            hiddenLabel
            id="filled-normal"
            label="Name"
            required
            color='success'
            variant="outlined"
            sx={{mb:'5vh'}}
            />
            <TextField
            hiddenLabel
            id="filled-normal"
            label="Email"
            required
            color='success'
            variant="outlined"
            sx={{mb:'5vh'}}
            />
            <TextField
            id="filled-multiline-flexible"
            label="Message"
            multiline
            required
            minRows={5}
            color='success'
            variant="outlined"
            sx={{mb:'5vh'}}
            />
            <Button variant='contained' color='success'>Submit</Button>
        </Box>
        <Footer />
    </Box>
  )
}

export default Contact