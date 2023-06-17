import './App.css';
import Video from './pages/video';

function App() {
  return (
    <div className="App">
      <div className='appVideos'>
        <Video
          likes={398}
          messages={232}
          shares={121}
          name="Nicholas Dev"
          description="Gatinho pulando"
          music="musica épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Video
          likes={44}
          messages={193}
          shares={89}
          name="Pedro"
          description="Gatinho olhando para o dedo"
          music="Clap your hands"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />
      </div>
    </div>
  );
}

export default App;
