import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Exercise = ({ exercise }) => {
    return (
        <Flex flexDirection="row" >
            <Box bgImage={exercise.gifUrl} w="6" h="4" ></Box>
        </Flex>
    );
}

export default Exercise;