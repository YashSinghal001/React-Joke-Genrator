import React, { useEffect, useState } from 'react'

const Jokes = () => {
  const [jokes, setJokes] = useState({ setup: "", punchline: "" });


  const fetchJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(res => res.json())
      .then(data => setJokes(data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchJokes();
  }, []);
  return (
    <div>
      <h1>Jokes Generator</h1>
      <p>{jokes.setup} </p>
      <p>{jokes.punchline} </p>

      <button onClick={fetchJokes}>Click me </button>
    </div>
  )
}

export default Jokes