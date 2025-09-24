import './Search.css';
import { useState } from 'react';

interface Props {
  searchText: string;
  setSearchText: (text: string) => void;
  dataList: string[];
  dataDisplayList: string[];
  searchCallback: (searchInput: string) => void;
}

function Search({ searchText, setSearchText, dataList, dataDisplayList, searchCallback }: Props) {
  const [searchResults, setSearchResults] = useState([] as string[]);
  const [topResult, setTopResult] = useState('');

  const updateSearch = (search: string) => {
    setSearchText(search);

    const modifiedSearch = search
      .replace(/[ .\-'()]/g, '')
      .replace('plus', '+')
      .toLowerCase();
    let newSearchResults = [];
    let newSearchPoints = [];
    let numZeroPoints = 0;
    let numOnePoints = 0;

    if (search != '') {
      for (let i = 0; i < dataDisplayList.length; i++) {
        if (dataList[i].includes(modifiedSearch)) {
          newSearchPoints.push({ name: dataDisplayList[i], points: dataList[i].indexOf(modifiedSearch) });

          if (newSearchPoints[newSearchPoints.length - 1].points == 0) {
            numZeroPoints++;
          } else if (newSearchPoints[newSearchPoints.length - 1].points == 1) {
            numOnePoints++;
          }

          if (newSearchPoints.length > 8 && numZeroPoints + numOnePoints >= 8) {
            break;
          }
        }
      }

      newSearchPoints.sort((a, b) => {
        return a.points - b.points;
      });

      const maxResults = newSearchPoints.length < 8 ? newSearchPoints.length : 8;
      for (let i = 0; i < maxResults; i++) {
        newSearchResults.push(newSearchPoints[i].name);
      }

      if (newSearchResults.length > 0) {
        setTopResult(newSearchResults[0]);
      } else {
        setTopResult(search);
      }
    }

    setSearchResults(newSearchResults);
  };

  return (
    <div>
      <div className='searchBar'>
        <input
          type='text'
          value={searchText}
          onChange={(e) => {
            updateSearch(e.currentTarget.value.toString());
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setSearchResults([]);
              searchCallback(topResult);
              setTopResult('');
            }
          }}
        ></input>
        <svg
          onClick={() => {
            setSearchResults([]);
            searchCallback(topResult);
            setTopResult('');
          }}
          className='searchIcon'
          xmlns='http://www.w3.org/2000/svg'
          width={32}
          height={32}
          viewBox='0 0 32 32'
          fill='#fff'
        >
          <circle cx='14' cy='14' r='9' stroke='#fff' stroke-width={3} fill='none'></circle>
          <path d='M20.5 20.5 L26 26' fill='#fff' stroke='#fff' strokeWidth={3}></path>
          <circle cx='26' cy='26' r='1.5' fill='#fff'></circle>
        </svg>
      </div>

      <ul className='searchDropdown'>
        {searchResults.map((result) => {
          return (
            <li
              className='searchDropdownItem'
              onClick={() => {
                setSearchText(result);
                setSearchResults([]);
                searchCallback(result);
              }}
            >
              {result}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Search;
