import './App.scss';
import { useCallback, useEffect, useState } from 'react';
import logo from './assets/Logo.png';

async function fetchAllCharacters() {
  const request = await fetch("https://rickandmortyapi.com/api/character")
  const rickAndMortyData = await request.json()
  return rickAndMortyData;
}

async function fetchCharacterById(id) {
  const request = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const characterData = await request.json()
  return characterData;
}

function getRandomCharacterId(maxRange) {
  return Math.floor(Math.random() * (maxRange - 1))
}

export default function App() {
  const [maxCount, setMaxCount] = useState()
  const [character, setCharacter] = useState(null)

  const getRandomCharacter = useCallback(async () => {
    const randomCharacter = await fetchCharacterById(getRandomCharacterId(maxCount))
    setCharacter(randomCharacter)
  }, [maxCount])

  useEffect(() => {
    const fetchData = async () => {
      const { info: { count } } = await fetchAllCharacters()
      setMaxCount(count)

      const initialCharacter = await fetchCharacterById(getRandomCharacterId(count))
      setCharacter(initialCharacter)
    }
    fetchData()
  }, [])


  return (
    <div>
      <div className="smallStars"></div>
      <div className="mediumStars"></div>
      <div className="bigStars"></div>

      <div className='container'>
        <div className="portal_blur"></div>
        <div className="portal"></div>
        <div className="portal1"></div>
        <div className="portal2"></div>
        <div className="portal3"></div>
        <div className="portal4"></div>

        <img className="logo" src={logo} alt="Logo" />
        <img className="characterImg" src={character?.image} alt="" onClick={() => getRandomCharacter()}></img>

        <div className="characterProfile">
          <div className="profileData1">
            <p>ID:{character?.id}</p>
            <p>NAME:{character?.name}</p>
            <p>GENDER:{character?.gender}</p>
          </div>
          <div className="profileData2">
            <p>SPECIES:{character?.species}</p>
            <p>STATUS:{character?.status}</p>
            <p>TYPE:{character?.type}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
