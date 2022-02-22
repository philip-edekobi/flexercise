import React from 'react';
import { Box, Flex, Text, Spacer } from '@chakra-ui/react';
import Exercise from './Exercise';
import { nanoid } from 'nanoid';
import styles from '../styles/exercises.module.css';
import { IoIosArrowForward } from "react-icons/io";

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
    console.log(exercises);
    return (
        <Flex flexDirection="column" px="6" py="2" m="2" className={styles.snippet} >
            <Flex>
                <Text fontWeight="600" color="pink.400" fontSize="xl" >Exercises</Text>
            </Flex>
            <Flex flexWrap='wrap'>
                {exercises.map(exercise => <Exercise key={nanoid()} exercise={exercise} />)}
            </Flex>
        </Flex>
    );
}

export default Exercises;