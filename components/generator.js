import React from 'react'
import styles from '../styles/Generator.module.css'
import { Box } from '@mui/system'
import { Typography, TextField, Button } from '@mui/material'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Generator = () => {

  const submit = async() => {
    console.log('hit');
    axios.post('/api/checkout_sessions');
  }

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  return (
    <Box className={styles.container}>
        <Box className={styles.ctatext}>
            <Typography variant='h4'>
              Ready to take control of your job search and get noticed by recruiters? Then don't wait any longer – use our platform to create custom outreach messages today!
            </Typography>
            <Box className={styles.text}>
              <Typography sx={{mb:2}}>
                Hey there job searcher! Tired of sending out generic resumes and getting zero response? Yeah, we feel you. That's where we come in.
              </Typography>
              <Typography sx={{mb:2}}>
                CustomOutreach.ai is here to help you stand out from the competition and actually get noticed by recruiters. All you have to do is copy/paste your resume and the job description of the position you're applying to into our form. And for just $0.89, boom! You'll get 10 personalized outreach messages that are tailored specifically to the job and company you're targeting.
              </Typography>
              <Typography sx={{mb:2}}>
                Outreach messages are like the secret weapon of the job search process. They allow you to directly connect with recruiters and show them why you're the perfect fit for the job. Plus, it's way more fun than just sending out the same old resume over and over again.
              </Typography>
              <Typography>
                Just fill out the form, pay, and we'll send the messages straight to your inbox. Time to kick your job search into high gear! Don't let your resume get lost in the pile. Use our platform to create custom outreach messages and increase your chances of getting noticed by recruiters today.
              </Typography>
            </Box>
        </Box>
        <Box className={styles.form}>
          <TextField
            hiddenLabel
            id="filled-normal"
            label="Name"
            required
            color='success'
            variant="outlined"
          />
          <TextField
            hiddenLabel
            id="filled-normal"
            label="Email"
            required
            color='success'
            variant="outlined"
          />
          <TextField
            id="filled-multiline-flexible"
            label="Resume"
            multiline
            required
            minRows={5}
            color='success'
            variant="outlined"
          />
          <TextField
            id="filled-multiline-flexible"
            label="Job Description"
            multiline
            required
            minRows={5}
            color='success'
            variant="outlined"
          />
          <Button variant='contained' color='success' onClick={submit}>Generate</Button>
        </Box>
    </Box>
  )
}

export default Generator