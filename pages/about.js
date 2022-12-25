import React from 'react'
import { Box, Typography } from '@mui/material'
import styles from '../styles/About.module.css'
import Header from '../components/header'
import Footer from '../components/footer'

const About = () => {
  return (
    <Box sx={{backgroundColor:'#E8EBF7'}}>
        <Header />
        <Box className={styles.container}>
            <Typography variant='h2' sx={{mb:'5vh'}}>About</Typography>
            <Typography variant='h5' sx={{mb:'3vh'}}>
                Welcome to our Custom Outreach AI, the ultimate destination for job seekers looking to stand out from the competition and increase their chances of getting noticed by recruiters.
            </Typography>
            <Typography variant='h5' sx={{mb:'3vh'}}>
                Our platform is super simple to use. Just copy and paste your resume and the job description of the position you're applying to into our form. For just 89 cents, you'll get 10 personalized outreach messages tailored specifically to the job and company you're targeting.
            </Typography>
            <Typography variant='h5' sx={{mb:'3vh'}}>
                Outreach messages are like the secret weapon of the job search process. They allow you to directly connect with recruiters and show them why you're the perfect fit for the job. Plus, it's way more fun than just sending out the same old resume over and over again.
            </Typography>
            <Typography variant='h5' sx={{mb:'3vh'}}>
                But the best part? Our platform makes it easy to reach out to multiple recruiters at once, saving you time and effort in the job search process. Simply pay, and we'll send the messages straight to your inbox. Time to kick your job search into high gear! Thanks for choosing our platform to assist you in your job search journey. We hope it helps you land your dream job!
            </Typography>
        </Box>
        <Footer />
    </Box>
  )
}

export default About