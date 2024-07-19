import React, { useEffect, useState } from 'react'


export const Meme = () => {
    const [meme, setMeme] = useState({
        author:"",
        title:"",
        url:""

    })

    function fetchMeme(){
        fetch("https://meme-api.com/gimme")
        .then(res => res.json())
        .then(data => setMeme(data))
        .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchMeme();
      }, []);
  return (
    <div>
<div className="boxed" style={{height:"500px",width:"400px",border:"2px solid black", }}>
<p>Author:{meme.author}</p>
{/* <br /> */}
<p>Title:{meme.title}</p>
{/* <br /> */}
{/* <p>{meme.url}</p> */}
<img src={meme.url} alt=""  width={"300px"} height={"300px"}/>
</div>
<button onClick={fetchMeme}>Click me </button>



    </div>
  )
}
