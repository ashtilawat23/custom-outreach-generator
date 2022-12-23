import React from 'react'
import styles from '../styles/Generator.module.css'
import { Box } from '@mui/system'
import { Input } from '@mui/material'

const Generator = () => {
  return (
    <Box className={styles.container}>
        <Box className={styles.ctatext}>
            <h2>copy</h2>
        </Box>
        <Box className={styles.form}>
            <Input />
        </Box>
    </Box>
  )
}

export default Generator