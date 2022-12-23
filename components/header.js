import React from 'react'
import styles from '../styles/Header.module.css'
import { Box, Button } from '@mui/material';
import Image from 'next/image';

const Header = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.imagecontainer}>
        <Image
          src='/custom.png'
          alt='customoutreach.ai'
          fill
          objectFit='contain'
        />
      </Box>
      <Box className={styles.navlinks}>
        <Button variant='text' className={styles.button}>Home</Button>
        <Button variant='text' className={styles.button}>About</Button>
        <Button variant='text' className={styles.button}>Contact</Button>
      </Box>
    </Box>
  )
}

export default Header