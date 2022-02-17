import React from 'react';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';
import styles from '../styles/Nav.module.css';

const NavLink = ({ href, children, pathname }) => {
  return (
    <Box fontSize="xl" mt="2" fontWeight="600" color="gray.400" mx="4" className={ `${styles.navItem} ${pathname === href ? styles.active : ""}` } >
        <Link href={href} passHref >{children}</Link>
    </Box>
  )
}

export default NavLink