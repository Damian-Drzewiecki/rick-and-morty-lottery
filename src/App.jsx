import './App.scss';
import { useCallback, useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import backgroundSound from './assets/rickandmortytheme.mp3';
import Portal from './components/Portal';
import Profile from './components/Profile';
import Logo from './components/Logo';
import classNames from 'classnames';

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
  const [imgClick, setImgClick] = useState()
  const [isInitialized, setIsInitialized] = useState(false)

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
      <ReactAudioPlayer
        src={isInitialized ? backgroundSound : ""}
        autoPlay
        loop
      />

      <div className="stars stars--small"></div>
      <div className="stars stars--medium"></div>
      <div className="stars stars--big"></div>

      <div className='startQuestion'>
        <div className={classNames("startQuestion__Question",{'unInitialized': isInitialized})}>Want to load data?</div>
        <div onClick={() => setIsInitialized(true)} className={classNames("startQuestion__YES",{'unInitialized': isInitialized})}>YES</div>
        <div onClick={() => setIsInitialized(true)} className={classNames("startQuestion__OK",{'unInitialized': isInitialized})}>OK</div>
        </div>

      <div className={classNames('container',{'unInitialized': !isInitialized})}>
        <Portal character={character} setImgClick={setImgClick} getRandomCharacter={getRandomCharacter} />
        <Profile character={character} imgClick={imgClick} />
        <Logo />
      </div>

    </div>
  )
}
