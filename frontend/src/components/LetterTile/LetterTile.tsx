import './LetterTile.css';

interface Props {
  children: string;
}

function LetterTile({ children }: Props) {
  return <div className='letterTile'>{children}</div>;
}

export default LetterTile;
