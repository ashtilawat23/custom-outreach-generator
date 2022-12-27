import React from 'react'
import { div } from '@mui/system'
import { Typography, TextField, Button } from '@mui/material'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  return (
    <div style={{backgroundColor:'#E8EBF7'}}>
        <Header />
        <div className={styles.container}>
            <h2 sx={{mb:'5vh'}}>Contact</h2>
            <input
            />
            <input
            />
            <input
            />
            <Button variant='contained' color='success'>Submit</Button>
        </div>
        <Footer />
    </div>
  )
}

export default Contact