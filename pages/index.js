import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { Exercises } from '../components';
import { getExercises } from '../utils/exercise';

export default function Home({ exercises }) {
  const [isSmall] = useMediaQuery('(max-width: 600px)');
  const [isXlarge] = useMediaQuery('(min-width: 1400px)');
  const router = useRouter();
  
  return (
    <Flex flexDirection="column">
      <Box display="flex" style={{width: "100vw", height: "100%"}} pb="15rem" className={styles.topHero} >
      <Flex className={styles.topHeroText} direction="column" justifySelf="center" style={{width: "50%"}}>
        <Box >
          <Text fontSize={isSmall ? "2xl" : "6xl"} 
            fontWeight="600" 
          >
            Flexercise
          </Text>
        </Box>
        <Box >
          <Text color="gray.500" >
            Workout and have fun.&nbsp;
            {isSmall && <br />}
             Be you.
            <br />
            {!isSmall && <>{"Be cool."}<br/></>} Flex your muscles. <br />
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
      </Flex>
      </Box>
      <Box>
        <Exercises exercises={exercises} />
      </Box>
    </Flex>
  )
}

export async function getStaticProps(){
  const exercises = await getExercises();

  return{
    props: {
      exercises
    }
  }
}