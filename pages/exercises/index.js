import React from 'react';
import { Exercises } from '../../components';
import { getExercises } from '../../utils/exercise';

const exercises = ({ exercises }) => {
  return (
    <>
      <Exercises full={true} exercises={exercises} />
    </>
  );
}

export async function getStaticProps(){
  const exercises = await getExercises();

  return {
    props: {
      exercises
    }
  }
}

export default exercises