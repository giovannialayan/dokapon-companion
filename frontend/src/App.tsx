import { useState } from 'react';
import './App.css';
import Jobcounter from './components/JobCounter/JobCounter';
import NavBar from './components/NavBar/NavBar';
import XpCounter from './components/XpCounter/XpCounter';
import BattleCalculator from './components/BattleCalculator/BattleCalculator';

function App() {
  const [currentTool, setCurrentTool] = useState(-1);
  const [currentToolString, setCurrentToolString] = useState('');

  const ChangeTool = async (tool: number, name: string) => {
    setCurrentTool(tool);
    setCurrentToolString(name);
  };

  return (
    <>
      <NavBar current={currentTool} currentString={currentToolString} onChangeTool={ChangeTool}></NavBar>
      <Jobcounter hide={currentTool != 0}></Jobcounter>
      <XpCounter hide={currentTool != 1}></XpCounter>
      <BattleCalculator hide={currentTool != 2}></BattleCalculator>
    </>
  );
}

export default App;
