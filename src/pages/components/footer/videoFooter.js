import React from 'react';
import './videoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className='videoFooter'>
      <div className='videoFooterText'>
        <h3>@NicholasDev</h3>
        <p>Descrição do Vídeo</p>
        <div className='videoFooterMusic'>
          <MusicNoteIcon className='videoFooterMusicIcon' />
          <div className='videoFooterMusicTitle'>
            <p>Título da musica</p>
          </div>
        </div>
      </div>
      <img
        className='videoFooterRecord'
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
        alt="Imagem de um vinil girando"
      />
    </div>
  )
}

export default VideoFooter;