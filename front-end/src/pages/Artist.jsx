import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import SongList from '../components/SongList'
import { artistsArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

const Artist = () => {
  const { id } = useParams()

  const { name, banner } = artistsArray.filter(
    (currentArtistObj) => currentArtistObj._id === id
  )[0]

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === name
  )

  // Gera um índice aleatório, só que dentro do intervalo do tamanho do array de músicas do artista
  const randomIndex = Math.floor( // floor arredonda para número inteiro!
    Math.random() * (songsArrayFromArtist.length - 1) // ao multiplicar o random defino um intervalo [ex: random() * 10 => numero aleatório no intervalo de 0 a 10]!
  )
  // Pega o id de uma das músicas de um determinado artista
  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id

  return (
    <div className='artist'>
      <div className="artist__header"
        style={{
          backgroundImage:
            `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})` 
        }}
      >
        <h2 className='artist__title'>{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>

        <SongList songsArray={songsArrayFromArtist} />
      </div>

      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon
          className='single-item__icon single-item__icon--artist'
          icon={faCirclePlay}
        />
      </Link>
    </div>
  )
}

export default Artist