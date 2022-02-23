import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Exercise from './Exercise';
import { nanoid } from 'nanoid';
import styles from '../styles/exercises.module.css';
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from 'next/router';

const Exercises = ({ full = false, exercises }) => {
    return (
        full ?  <FullExercise exercises={exercises} /> : <ExerciseSnip exercises={exercises} />   
    );
}

const FullExercise = ({ exercises }) => {
    return (
        <></>
    );
}

const ExerciseSnip = ({ exercises }) => {
    const router = useRouter();

    return (
        <Flex flexDirection="column" px="6" py="2" mx="0.5rem" my="0.5rem" className={styles.snippet} >
            <Flex>
                <Text fontWeight="600" color="gray.600" fontSize="2xl" >Exercises</Text>
            </Flex>
            <Flex flexWrap='wrap' justify="center" align="center" >
                {exercises.map(exercise => <Exercise key={nanoid()} exercise={exercise} />)}
                <Box className={styles.arrowContainer} onClick={() => router.push('/exercises')}>
                    <IoIosArrowForward />
                </Box>
            </Flex>
        </Flex>
    );
}

export default Exercises;