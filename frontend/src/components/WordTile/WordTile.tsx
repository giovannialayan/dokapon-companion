import LetterTile from '../LetterTile/LetterTile';
import './WordTile.css';

interface Props {
  children: string;
}

function WordTile({ children }: Props) {
  return (
    <div className='wordTile'>
      {children.split('').map((letter) => {
        return <LetterTile>{letter}</LetterTile>;
      })}
    </div>
  );
}

export default WordTile;
