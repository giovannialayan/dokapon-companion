import { useState } from 'react';
import './JobCounter.css';

function Jobcounter() {
  const [jobPoints, setJobPoints] = useState(0);

  const incrementPoints = () => {
    let newJobPoints = jobPoints + 1;

    if (newJobPoints >= 7) {
      newJobPoints = 0;
    }

    setJobPoints(newJobPoints);
  };

  return (
    <div>
      <div className='jobPointsContainer'>
        <p>job points: {jobPoints}/7</p>
        <button className='greenActive' onClick={incrementPoints}>
          +1
        </button>
      </div>
    </div>
  );
}

export default Jobcounter;
