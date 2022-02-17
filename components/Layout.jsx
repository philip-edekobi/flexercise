import React from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children}) => (
    <>
        <Head>
            <title>Flexercise</title>	
        </Head>
        <Box m="auto" maxWidth="1280px" >
            <Box mb="4"><Navbar /></Box>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </>
);

export default Layout;