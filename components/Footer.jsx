import React from 'react';
import { Box } from '@chakra-ui/react';
import Link from 'next/link';

const Footer = () => (
    <Box textAlign="center" p="5" color="gray.600" >
        &copy; 2021 Flexercise.
        <br />
        <Link href="https://www.flaticon.com/free-icons/runner" title="runner icons"> 
            Runner icons created by Freepik - Flaticon 
        </Link>
    </Box>
);

export default Footer;