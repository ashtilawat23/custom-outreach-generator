import React from 'react'
import styles from '../styles/Header.module.css'
import { Box, Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.imagecontainer}>
        <Image
          src='/custom_outreach_ai.png'
          alt='customoutreach.ai'
          fill
          objectFit='cover'
        />
      </Box>
      <Box className={styles.navlinks}>
        <Link href='/' style={{ textDecoration:'none' }}>
          <Button variant='text' className={styles.button}>Home</Button>
        </Link>
        <Link href='/about' style={{ textDecoration:'none' }}>
          <Button variant='text' className={styles.button}>About</Button>
        </Link>
        <Link href='/contact' style={{ textDecoration:'none' }}>
          <Button variant='text' className={styles.button}>Contact</Button>
        </Link>
      </Box>
    </Box>
  )
}

export default Header