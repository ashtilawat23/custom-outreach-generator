import React from 'react'
import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
        <Image
          src='/custom_outreach_ai.png'
          alt='customoutreach.ai'
          fill
          objectFit='cover'
        />
      </div>
      <div className={styles.navlinks}>
        <Link href='/' style={{ textDecoration:'none' }}>
          <button className={styles.button}>Home</button>
        </Link>
        <Link href='/about' style={{ textDecoration:'none' }}>
          <button className={styles.button}>About</button>
        </Link>
        <Link href='/contact' style={{ textDecoration:'none' }}>
          <button className={styles.button}>Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default Header