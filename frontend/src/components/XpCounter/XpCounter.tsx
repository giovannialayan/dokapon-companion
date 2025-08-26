import { useRef, useState } from 'react';

//https://dokapon.fandom.com/wiki/Level_Up?utm_source=chatgpt.com#Dokapon_Kingdom

function XpCounter() {
  const numberStrArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  const [level, setLevel] = useState(1);
  const [xpUntilLevel, setXpuntilLevel] = useState(8);
  const [xpInput, setXpInput] = useState('');

  const totalXp = useRef(0);
  const targetXp = useRef(8);

  const addXp = () => {
    totalXp.current += +xpInput;
    console.log(totalXp.current, targetXp.current);
    if (totalXp.current >= targetXp.current) {
      setLevel(level + 1);
      targetXp.current = Math.pow(level + 2, 3);
    }

    setXpuntilLevel(targetXp.current - totalXp.current);
  };

  return (
    <div>
      <div>
        <p>level: {level}</p>
        <p>{xpUntilLevel} xp until next level</p>
        <input
          type='text'
          value={xpInput}
          onChange={(e) => {
            const letter = e.currentTarget.value.toString();
            if (numberStrArr.includes(letter[letter.length - 1])) {
              setXpInput(letter);
            }
          }}
        ></input>
        <button onClick={addXp}>add xp</button>
      </div>
    </div>
  );
}

export default XpCounter;
