import { useState } from 'react';

interface Props {
  hide: boolean;
}

const monsterList = [''];

function MonsterSearch({ hide }: Props) {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([] as string[]);
  const [monsterName, setMonsterName] = useState('');

  const updateSearch = (search: string) => {
    setSearchText(search);

    const modifiedSearch = search.replace(' ', '').replace('.', '').replace('-', '');
    let newSearchResults = [];

    for (let i = 0; i < monsterList.length; i++) {
      if (monsterList[i].includes(modifiedSearch)) {
        newSearchResults.push(monsterList[i]);

        if (newSearchResults.length >= 8) {
          break;
        }
      }
    }

    setSearchResults(newSearchResults);
  };

  const getMonster = async () => {
    const modifiedSearch = searchText.replace(' ', '').replace('.', '').replace('-', '');
    let firstSearchResult = '';

    for (let i = 0; i < monsterList.length; i++) {
      if (monsterList[i].includes(modifiedSearch)) {
        firstSearchResult = monsterList[i];
        break;
      }
    }

    setSearchText(firstSearchResult);

    const res = await fetch('/api/monster/' + firstSearchResult);

    if (res.ok) {
      const monster = await res.json();
      setMonsterName(monster.name);
    }
  };

  return (
    <div className={hide ? 'hide' : ''}>
      <div>
        <div>
          <input
            type='text'
            value={searchText}
            onChange={(e) => {
              updateSearch(e.currentTarget.value.toString());
            }}
          ></input>
          <button onClick={getMonster}>search</button>
        </div>

        <ul className='searchDropdown'>
          {searchResults.map((result) => {
            return (
              <li
                onClick={() => {
                  setSearchText(result);
                }}
              >
                {result}
              </li>
            );
          })}
        </ul>
      </div>
      {monsterName != '' && (
        <div>
          <p>{monsterName}</p>
        </div>
      )}
    </div>
  );
}

export default MonsterSearch;
