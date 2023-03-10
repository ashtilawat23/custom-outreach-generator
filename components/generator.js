import React from 'react'
import styles from '../styles/Generator.module.css'
import getStripe from '../lib/get-stripe'
import axios from 'axios'

const Generator = () => {

  const redirectToCheckout = async () => {
    // Create Stripe checkout
    const {
      data: { id },
    } = await axios.post('/api/checkout_sessions');

    // Redirect to checkout
    const stripe = await getStripe();
    await stripe.redirectToCheckout({ sessionId: id });
  };

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you are ready.');
    }
  }, []);

  return (
    <div className={styles.container}>
        <div className={styles.ctatext}>
            <h4>
              Ready to take control of your job search and get noticed by recruiters? Then don't wait any longer – use our platform to create custom outreach messages today!
            </h4>
            <div className={styles.text}>
              <h4>
                Hey there job searcher! Tired of sending out generic resumes and getting zero response? Yeah, we feel you. That's where we come in.
              </h4>
              <h4>
                CustomOutreach.ai is here to help you stand out from the competition and actually get noticed by recruiters. All you have to do is copy/paste your resume and the job description of the position you're applying to into our form. And for just $0.89, boom! You'll get 10 personalized outreach messages that are tailored specifically to the job and company you're targeting.
              </h4>
              <h4>
                Outreach messages are like the secret weapon of the job search process. They allow you to directly connect with recruiters and show them why you're the perfect fit for the job. Plus, it's way more fun than just sending out the same old resume over and over again.
              </h4>
              <h4>
                Just fill out the form, pay, and we'll send the messages straight to your indiv. Time to kick your job search into high gear! Don't let your resume get lost in the pile. Use our platform to create custom outreach messages and increase your chances of getting noticed by recruiters today.
              </h4>
            </div>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
          <input
            sx={{width:'40vw', backgroundColor:'rgba(255,255,255,0.078)'}}
          />
          <input
            sx={{width:'40vw', backgroundColor:'rgba(255,255,255,0.078)'}}
          />
          <input
            sx={{width:'40vw', backgroundColor:'rgba(255,255,255,0.078)'}}
          />
          <input
            sx={{width:'40vw', backgroundColor:'rgba(255,255,255,0.078)'}}
          />
          <button onClick={redirectToCheckout}>Generate</button>
          </form>
        </div>
    </div>
  )
}

export default Generator