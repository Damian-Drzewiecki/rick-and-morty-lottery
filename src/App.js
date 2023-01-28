import './App.scss';
import { useCallback, useEffect, useState } from 'react';
import logo from './assets/Logo.png';
import useSound from 'use-sound';
import backgroundSound from './assets/rickandmortytheme.mp3';

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

function characterType(type) {
  if (type === "") { return " -" } else { return type };
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
        <div className="portal_blur"></div>
        <div className="portal"></div>
        <div className="portal1"></div>
        <div className="portal2"></div>
        <div className="portal3"></div>
        <div className="portal4"></div>
        <div className="imgFade">
          <img className="characterImg" src={character?.image} alt="" onClick={() => getRandomCharacter()}></img>
        </div>
        <div className="logoFade">
          <img className="logo" src={logo} alt="Logo" />
        </div>

        <div className="characterProfile">
          <div className="profileData1">
            <p className='p1'>ID:{" "}{character?.id}</p>
            <p className='p2'>NAME:{character?.name}</p>
            <p className='p3'>GENDER:{character?.gender}</p>
          </div>
          <div className="profileData2">
            <p className='p4'>SPECIES:{character?.species}</p>
            <p className='p5'>STATUS:{character?.status}</p>
            <p className='p6'>TYPE:{characterType(character?.type)}</p>
            <div className="p7">
              <p className='dot'>█</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
