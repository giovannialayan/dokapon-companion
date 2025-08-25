import './NavBar.css';

interface Props {
  current: number;
  currentString: string;
  onChangeTool: (toolRoute: string, toolId: number) => void;
}

function NavBar({ current, currentString, onChangeTool }: Props) {
  return (
    <div className='navContainer'>
      <h2>dokapon companion</h2>
      <div className='navButtons'>
        <button onClick={() => onChangeTool('/tool/jobcounter', 0)} className={'navButton' + (current == 0 ? ' navSelected' : '')}>
          job counter
        </button>
        <button onClick={() => onChangeTool('/tool/xpcounter', 1)} className={'navButton' + (current == 1 ? ' navSelected' : '')}>
          xp counter
        </button>
        <button onClick={() => onChangeTool('/tool/battlecalc', 2)} className={'navButton' + (current == 2 ? ' navSelected' : '')}>
          battle calculator
        </button>
        <button onClick={() => onChangeTool('/tool/itemsearch', 3)} className={'navButton' + (current == 3 ? ' navSelected' : '')}>
          item search
        </button>
        <button onClick={() => onChangeTool('/tool/monstersearch', 4)} className={'navButton' + (current == 4 ? ' navSelected' : '')}>
          monster search
        </button>
        <button onClick={() => onChangeTool('/tool/continents', 5)} className={'navButton' + (current == 5 ? ' navSelected' : '')}>
          continent maps
        </button>
      </div>
      <h1 className='navCurrent'>{currentString}</h1>
    </div>
  );
}

export default NavBar;
