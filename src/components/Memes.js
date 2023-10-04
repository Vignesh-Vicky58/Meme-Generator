import React, {useState, useEffect} from 'react'
// import memesData from '../memesData';
import '../App.css';

function Memes() {
    const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    // const [allMemeImages, setAllMemeImages] = useState(memesData)

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage() {
      // const memesArray = allMemesImages.data.memes
      const randomNumber = Math.floor(Math.random() * allMemes.length)
      const url = allMemes[randomNumber].url
      setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
      }))     
    }

    function handleChange(event) {
      const {name, value} = event.target
      setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
      }))
    }

  return (
    <main>
        <div className="form">
            <input 
              className="form-input" 
              type="text" 
              placeholder="Top text"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
            <input 
              className="form-input" 
              type="text" 
              placeholder="Bottom text"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
            <button className="form-button" onClick={getMemeImage}>Get a new meme image</button>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    </main>
  )
}

export default Memes