import React from 'react'
import Player from '../components/Player'
import { Link, useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs'
import { artistsArray } from '../assets/database/artists'

const Song = () => {
  const { id } = useParams()

  // Retorna o objeto da música específica, conforme passada por parâmetro na url
  const { image, name, duration, artist, audio } = songsArray.filter(
    (currentSongObj) => currentSongObj._id === id
  )[0]

  // Retorna o objeto do artista referente à música em questão
  const artistObj = artistsArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0]

  // QUERO MUDAR ESSA PARTE DEPOIS PARA PEGAR MUSICA ANTERIOR E PROXIMA!
  // Lista todas as músicas do mesmo artista da música atual
  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist
  )
    // Gera um índice aleatório, só que dentro do intervalo do tamanho do array de músicas do artista
  const randomIndex = Math.floor( // floor arredonda para número inteiro!
    Math.random() * (songsArrayFromArtist.length - 1) // ao multiplicar o random defino um intervalo [ex: random() * 10 => numero aleatório no intervalo de 0 a 10]!
  )
  const randomIndex2 = Math.floor( // floor arredonda para número inteiro!
    Math.random() * (songsArrayFromArtist.length - 1) // ao multiplicar o random defino um intervalo [ex: random() * 10 => numero aleatório no intervalo de 0 a 10]!
  )
  // Pega o id de uma das músicas do artista da música atual
  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id
  const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id

  return (
    <div className='song'>
      <div className="song__container">
        <div className="song__image-container">
          <img
            src={image}
            alt={`Imagem da música ${name}`}
          />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do artista ${artist}`}
          />
        </Link>

        {/* ESSA PARTE TERIA QUE TIRAR ESSE RANDOM... E PASSAR PREVIOUS E NEXT  */}
        <Player 
          duration={duration} 
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio = {audio}
        />

        <div>
          <p className='song__name'>{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  )
}

export default Song