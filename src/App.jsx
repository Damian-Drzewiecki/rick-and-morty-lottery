import './App.scss';
import { useCallback, useEffect, useState } from 'react';
import useSound from 'use-sound';
import backgroundSound from './assets/rickandmortytheme.mp3';
import Portal from './components/Portal';
import Profile from './components/Profile';
import Logo from './components/Logo';

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
  const [play] = useSound(backgroundSound)

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

  useEffect(() => {
    play()
  }, [play])


  return (
    <div>
      <div className="smallStars"></div>
      <div className="mediumStars"></div>
      <div className="bigStars"></div>

      <div className='container'>
        <Portal character={character} getRandomCharacter={getRandomCharacter} />
        <Profile character={character} />
        <Logo />
      </div>

    </div>
  )
}
