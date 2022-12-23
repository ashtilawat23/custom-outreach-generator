import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Generator from '../components/generator'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Custom Outreach AI</title>
        <meta name="description" content="Created by ashtilawat23@gmail.com" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Generator />
        <Footer />
      </main>
    </div>
  )
}
