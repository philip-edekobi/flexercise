import React from 'react';
import Link from 'next/link';
import { Menu, MenuButton, MenuList,
 MenuItem, IconButton, Flex, Box, 
 Spacer, Button, useMediaQuery } from '@chakra-ui/react';
import { FcHome, FcMenu } from 'react-icons/fc';
import { GiWeightLiftingUp } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import NavLink from './NavLink';
import { useRouter } from 'next/router';

const menuOptions = [
  ["Home", '/'],
  ["Exercises", "/exercises"],
  ["Equipment", "/equipment"]
];

const Navbar = () => {
  const [isSmall] = useMediaQuery('(max-width: 600px)');

  return (
    isSmall ? <SmallNav /> : <BigNav />
  )
}

const BigNav = () => {
  const router = useRouter();

  return (
    <Flex bgColor="white" p="2" w="100vw" >
      <Box ml="6" fontSize="3xl" color="pink.400" fontWeight="700" >
          <Link href="/" paddingLeft="2" passHref style={{cursor: 'pointer'}} >
              Flexercise
          </Link>
      </Box>
      <Spacer />
      <Box>
        <Flex mr="4" >
          {menuOptions.map((option, i) => <NavLink pathname={router.pathname} href={menuOptions[i][1]} key={i} >{option[0]}</NavLink>)}
          <Spacer />
          <Button colorScheme="pink" size="md" >Log In</Button>
        </Flex>
      </Box>
    </Flex>  
  );
}

const SmallNav = () => {
  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.200" mt="3" >
      <Box ml="6" fontSize="3xl" color="pink.400" fontWeight="700" >
          <Link href="/" paddingLeft="2" passHref style={{cursor: 'pointer'}} >
              Flexercise
          </Link>
      </Box>
      <Spacer />
      <Box>
        <Button >Log In</Button>
        <Menu fontSize="md" >
          <MenuButton as={IconButton} aria-label="Menu" icon={<FcMenu />} variant="outlined" color="red.400" />
            <MenuList>
              <Link href="/" passHref>
                <MenuItem icon={<FcHome />}>Home</MenuItem>
              </Link>
              <Link href="/exercises" passHref>
                <MenuItem icon={<GiWeightLiftingUp />}>Exercises</MenuItem>
              </Link>
              <Link href="/equipment" passHref>
                <MenuItem icon={<CgGym />}>Equipment</MenuItem>
              </Link>
            </MenuList>
        </Menu>
      </Box>
    </Flex>  
  );
}

export default Navbar