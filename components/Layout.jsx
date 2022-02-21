import React from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/Nav.module.css';

const Layout = ({ children}) => (
    <main>
        <Head>
            <title>Flexercise</title>	
        </Head>
        <Box m="auto" maxWidth="1920px" >
            <Box className={styles.navBar} borderBottom="1px" borderColor="gray.200" bgColor="white" >
                <Navbar />
            </Box>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </main>
);

export default Layout;