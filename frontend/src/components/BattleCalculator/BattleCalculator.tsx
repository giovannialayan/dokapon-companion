import { useState } from 'react';
import './BattleCalculator.css';
import { CheckNumberInput } from '../../Utils';

function BattleCalculator() {
  return (
    <div className='battleCalcContainer'>
      <div>
        <p>your stats</p>
        <StatsInput></StatsInput>
      </div>
      <div>
        <p>their stats</p>
        <StatsInput></StatsInput>
      </div>
    </div>
  );
}

export default BattleCalculator;

interface StatsInputProps {}

function StatsInput() {
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [magic, setMagic] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [health, setHealth] = useState(0);

  return (
    <div>
      <div>
        <p>AT</p>
        <input
          type='text'
          value={attack}
          onChange={(e) => {
            CheckNumberInput(e.currentTarget.value.toString(), setAttack);
          }}
        ></input>
      </div>
      <div>
        <p>DF</p>
        <input
          type='text'
          value={defense}
          onChange={(e) => {
            CheckNumberInput(e.currentTarget.value.toString(), setDefense);
          }}
        ></input>
      </div>
      <div>
        <p>MG</p>
        <input
          type='text'
          value={magic}
          onChange={(e) => {
            CheckNumberInput(e.currentTarget.value.toString(), setMagic);
          }}
        ></input>
      </div>
      <div>
        <p>SP</p>
        <input
          type='text'
          value={speed}
          onChange={(e) => {
            CheckNumberInput(e.currentTarget.value.toString(), setSpeed);
          }}
        ></input>
      </div>
      <div>
        <p>HP</p>
        <input
          type='text'
          value={health}
          onChange={(e) => {
            CheckNumberInput(e.currentTarget.value.toString(), setHealth);
          }}
        ></input>
      </div>
    </div>
  );
}
