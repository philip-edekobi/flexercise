import axios from "axios";

const options = {
    headers: {
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      'x-rapidapi-key': process.env.API_KEY
    }
}

const bodyParts = [ "back", "cardio", "chest", "lower arms",
    "lower legs", "neck", "shoulders", "upper arms", 
    "upper legs", "waist"
]

const baseUrl = 'https://exercisedb.p.rapidapi.com/exercises';

export async function getExercises(){
    let exercises = []
    // for(let i = 22; i <= 31; i++){
    //     const response = await axios.get(`${baseUrl}/exercise/00${i}`, { ...options });
    //     const data = await response.data;
    //     exercises.push(data);
    // }
    return exercises;
}

export async function getExercisesByBodyParts(){

}