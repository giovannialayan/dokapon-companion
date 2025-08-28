import { useState } from 'react';
import './App.css';
import Jobcounter from './components/JobCounter/JobCounter';
import NavBar from './components/NavBar/NavBar';
import XpCounter from './components/XpCounter/XpCounter';
import BattleCalculator from './components/BattleCalculator/BattleCalculator';

function App() {
  const [currentTool, setCurrentTool] = useState(-1);
  const [currentToolString, setCurrentToolString] = useState('');

  const ChangeTool = async (tool: string, id: number) => {
    if (currentTool == id) {
      return;
    }

    const response = await fetch(tool);
    const responseJson = await response.json();

    if (response.ok) {
      setCurrentTool(responseJson.tool);
      setCurrentToolString(responseJson.name);
    } else {
      //show error
      console.log(responseJson);
    }
  };

  return (
    <>
      <NavBar current={currentTool} currentString={currentToolString} onChangeTool={ChangeTool}></NavBar>
      {currentTool == 0 && <Jobcounter></Jobcounter>}
      {currentTool == 1 && <XpCounter></XpCounter>}
      {currentTool == 2 && <BattleCalculator></BattleCalculator>}
    </>
  );
}

export default App;
