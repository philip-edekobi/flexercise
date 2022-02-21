import Head from 'next/head';
import Image from 'next/image';

import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Home() {
  const [isSmall] = useMediaQuery('(max-width: 600px)');
  const [isXlarge] = useMediaQuery('(min-width: 1400px)');
  const router = useRouter();
  
  return (
    <Flex>
      <Box style={{width: "100vw", height: "100vh"}} className={styles.topHero} >
        <Box className={styles.topHeroText}>
          <Text fontSize={isSmall ? "3xl" : "7xl"} 
            fontWeight="600" 
          >
            Flexercise
          </Text>
        </Box>
        <Box className={styles.topHeroSubtext}>
          <Text color="gray.500" >
            Workout and have fun.&nbsp;
            {isSmall && <br />}
             Be you.
            <br />
             Be unstoppable.
            <br />
            Be cool.<br/> Flex your muscles with&nbsp;
            <span 
              style={{
                color: "#ff55aa", fontWeight: "bold", fontSize: isXlarge ? "1.8rem" : "1.2rem",
                cursor: "pointer"
              }}
              onClick = {() => router.push('/')}
            >
              Flexercise
            </span>
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}
