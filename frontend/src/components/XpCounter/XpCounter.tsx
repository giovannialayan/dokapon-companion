import { useRef, useState } from 'react';
import './XpCounter.css';
import { CheckNumberInput } from '../../utils';

//https://dokapon.fandom.com/wiki/Level_Up?utm_source=chatgpt.com#Dokapon_Kingdom

interface Props {
  hide: boolean;
}

function XpCounter({ hide }: Props) {
  const [level, setLevel] = useState(1);
  const [xpUntilLevel, setXpuntilLevel] = useState(8);
  const [xpInput, setXpInput] = useState(0);

  const totalXp = useRef(0);
  const targetXp = useRef(8);

  const addXp = () => {
    totalXp.current += xpInput;
    let newLevel = level;

    while (totalXp.current >= targetXp.current) {
      newLevel++;
      targetXp.current = Math.pow(newLevel + 1, 3);
    }

    if (newLevel != level) {
      setLevel(newLevel);
    }

    setXpuntilLevel(targetXp.current - totalXp.current);
  };

  return (
    <div className={hide ? 'hide' : ''}>
      <div>
        <p>level: {level}</p>
        <p>{xpUntilLevel} xp until next level</p>
        <div className='xpInputContainer'>
          <input
            type='text'
            value={xpInput}
            onChange={(e) => {
              CheckNumberInput(e.currentTarget.value.toString(), setXpInput);
            }}
          ></input>
          <button onClick={addXp}>add xp</button>
        </div>
      </div>
    </div>
  );
}

export default XpCounter;
