import type { NextPage } from 'next'
import Head from 'next/head'
import AppTheme from "../styles/AppTheme"
import styles from "../styles/home.module.css"
import { ThemeProvider } from '@mui/material/styles'
import Header from "../components/Header"
import Stats from "../components/Stats"
import About from "../components/About"

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={AppTheme}>
        <Header />
        &nbsp;
        <div className={styles.info}>
            <Stats />
            <About />
        </div>
    </ThemeProvider>
  )
}

export default Home
