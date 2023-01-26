import './App.scss';
import { useEffect, useState } from 'react';

export default function App() {
  const [maxCount, setMaxCount] = useState()
  const [randomId, setRandomId] = useState(null)
  const [character, setCharacter] = useState(0)

  function randomCharacter(lastCharacterId) {
    setRandomId(Math.floor(Math.random() * (lastCharacterId - 1)))
  }

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch("https://rickandmortyapi.com/api/character")
      const rickAndMortyData = await request.json()
      setMaxCount(rickAndMortyData.info.count)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`)
      const characterData = await request.json()
      setCharacter(characterData)
    }
    if (randomId !== null) fetchData()
  }, [randomId])
  console.log(character)
  return (
    <div>
      <button type='button' onClick={() => randomCharacter(maxCount)}>Click me dude</button>
      <div>
        <img src={character.image} alt=""></img>
        <p>ID:{character.id}</p>
        <p>NAME:{character.name}</p>
        <p>GENDER:{character.gender}</p>
        <p>SPECIES:{character.species}</p>
        <p>STATUS:{character.status}</p>
        <p>TYPE:{character.type}</p>
      </div>
    </div>
  )
}
