import './App.css';
import WordTile from './components/WordTile/WordTile';

function App() {
  const startWord = 'word';
  const targetword = 'free';

  return (
    <>
      <div className='wordList'>
        <WordTile>{startWord}</WordTile>
        <WordTile>{targetword}</WordTile>
      </div>
    </>
  );
}

export default App;
