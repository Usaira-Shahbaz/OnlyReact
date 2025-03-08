import { useEffect, useState } from "react";

export default function JokeApi(){
    let [joke,setJoke] = useState({})
    const URL = "https://official-joke-api.appspot.com/random_joke"
    let fetchJoke = async()=>{
        let response = await fetch(URL);
        console.log(response)
        let jsonRespone = await response.json();
        setJoke({setup: jsonRespone.setup, punchline:jsonRespone.punchline})
    }
    useEffect( ()=>{
        async function firsTimeJoke() {
            let response = await fetch(URL);
            console.log(response)
            let jsonRespone = await response.json();
            setJoke({setup: jsonRespone.setup, punchline:jsonRespone.punchline})
        }
        firsTimeJoke()
    },[])
    return (
        <div>
        <h2>Joke API</h2>
      
        <p>{joke.setup}</p>
        <p>{joke.punchline}</p>
        <button onClick={fetchJoke}>Generate Joke</button>
        </div>
    )
}