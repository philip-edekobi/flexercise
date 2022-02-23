import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../styles/exercises.module.css';
import defaultImage from "../public/assets/images/default-image.png";

const Exercise = ({ exercise }) => {
    return (
        <Flex style={{cursor: "pointer"}} my="4" mx="3" bgColor="gray.100" className={styles.exerciseSnippet} >
            <Box bgColor="white">
                <Image src={exercise.gifUrl.startsWith("http") ? exercise.gifUrl : defaultImage} width="150" height="150" alt={exercise.name} />
            </Box>
            <Box w="10rem" p="5" display="flex" justify="center" align="center" >
                <Text>{capitalize(exercise.name)}</Text>
            </Box>
        </Flex>
    );
}

function capitalize(sentence) {
    let words = sentence.split(" ");
    words = words.map(word => word[0].toUpperCase() + word.slice(1))
    return words.join(" ");
}

export default Exercise;