import type { NextPage } from 'next'
import Head from 'next/head'
import AppTheme from "../styles/AppTheme"
import styles from "../styles/home.module.css"
import { ThemeProvider } from '@mui/material/styles'
import Header from "../components/Header"
import Stats from "../components/Stats"
import About from "../components/About"
import Sponsors from "../components/Sponsors"
import SubTeams from "../components/SubTeams"
import NavBar from "../components/NavBar"
import Recruitment from "../components/Recruitment"
import Contacts from "../components/Contacts"

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={AppTheme}>
        <NavBar />
        <Header />
        &nbsp;
        <div className={styles.info}>
            <Stats />
            <About />
        </div>
        <SubTeams />
        <Sponsors />
        <Recruitment />
        <Contacts />
    </ThemeProvider>
  )
}

export default Home
