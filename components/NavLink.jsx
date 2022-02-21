import React from 'react';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';
import styles from '../styles/Nav.module.css';

const NavLink = ({ href, children, pathname }) => {
  return (
    <Box fontSize="m" mt="2" fontWeight="400" color="gray.600" mx="4" className={ `${styles.navItem} ${pathname === href ? styles.active : ""}` } >
        <Link href={href} passHref >{children}</Link>
    </Box>
  )
}

export default NavLink