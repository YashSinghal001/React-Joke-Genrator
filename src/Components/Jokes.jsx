import React, { useState, useEffect } from 'react';
// import Image from './Components/bg.jpg'

export default function Jokes() {
    const [jokes, setJokes] = useState({
        joke: "There are only 10 kinds of people in this world: those who know binary and those who don't.",
       
    });
    const [categorys, setCategory] = useState({
        category: "Programming",
       
    });

    function fetchJoke() {
        fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
            .then((response) => response.json())
            .then((data) => {
                setJokes({ joke: data.joke 
                });
                setCategory({
                    category:data.category
                });
                
            }).catch((err)=>{console.log(err)})
    }
 //When We refresh Page new joke loads 
    useEffect(() => {
        fetchJoke();
    }, []);

    const clickJokes = () => {
        fetchJoke();
        // ?
        // setTimeout( fetchJoke(),3000)
    };
   

    return (
        <div>
            <div className="box">
                <p >Category: {categorys.category}</p><br />
                <p className='joke'>{jokes.joke}</p>
                <button  onClick={clickJokes}>Generate Jokes</button>
            </div>
        </div>
    );
}