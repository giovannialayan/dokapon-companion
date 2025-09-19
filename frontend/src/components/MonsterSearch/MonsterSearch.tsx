import { useState } from 'react';

interface Props {
  hide: boolean;
}

//prettier-ignore
const monsterList = ['Rogue','Berserker','Barbarian','Bandit','Halfling','Assassin','Ninja','Magician','Summoner','Wizard','Gnome','Dwarf','Kobold','Kobold King','Goblin','Orc','Hobgoblin','Lizardman','Thunder Lizard','Wear Tiger','Dark Knight','Dullahan','Troll','Ogre','Giant','Minotaur','Cyclops','Heckhound','Fenrir','Cerberus','Gorgon','Behemoth','Treasure Hawk','Gryffon','Sphynx','Manticore','Chimera','King Chimera','Salamander','Basilisk','Cockatrice','Roc','Phoenix','Bat','Demon Bat','Dragon','Zombie Dragon','Elder Dragon','Tiamat','Scorpion-G','Sea Scorpion','Spider-G','Tarantula','Crawler','Worm','Pixie','Fairie','Sylph','Unseelie','Dryad','Treant','Ent','Mycopath','Fungalore','Wisp','Shade','Killer Fish','Gunfish','Merman','Kelpie','Mermaid','Celine','Undine','Sea Serpent','Leviathan','Hydra','Squilla','Kraken','Skeleton','Red Bones','Bone Knight','Zombie','Wight','Ghoul','Mummy','Golem','Iron Golem','Wraith','Doppelganger','Lich','Ghost','Spirit','Specter','Ghast','Death Cloud','Flame Eater','Imp','Gremlin','Incubus','Gargoyle','Night Gaunt','Demon','Arch Demon','Pazuzu',"Demon's Guard",'Ifrit','Fire Genie','Banshee','Succubus','Medusa','Lamia','Naga','Giant Eyeball','Gazer','Slime','Jelly','Grey Goo','Gel Splatter','Rico Jr.','Overlord Rico','Overlord Rico (True Form)','Comacho','Wabbit','Wallace','Chimpy','Robo-Sassin',];
//prettier-ignore
const monsterBaseList = ['rogue','berserker','barbarian','bandit','halfling','assassin','ninja','magician','summoner','wizard','gnome','dwarf','kobold','koboldking','goblin','orc','hobgoblin','lizardman','thunderlizard','weartiger','darkknight','dullahan','troll','ogre','giant','minotaur','cyclops','heckhound','fenrir','cerberus','gorgon','behemoth','treasurehawk','gryffon','sphynx','manticore','chimera','kingchimera','salamander','basilisk','cockatrice','roc','phoenix','bat','demonbat','dragon','zombiedragon','elderdragon','tiamat','scorpiong','seascorpion','spiderg','tarantula','crawler','worm','pixie','fairie','sylph','unseelie','dryad','treant','ent','mycopath','fungalore','wisp','shade','killerfish','gunfish','merman','kelpie','mermaid','celine','undine','seaserpent','leviathan','hydra','squilla','kraken','skeleton','redbones','boneknight','zombie','wight','ghoul','mummy','golem','irongolem','wraith','doppelganger','lich','ghost','spirit','specter','ghast','deathcloud','flameeater','imp','gremlin','incubus','gargoyle','nightgaunt','demon','archdemon','pazuzu','demonsguard','ifrit','firegenie','banshee','succubus','medusa','lamia','naga','gianteyeball','gazer','slime','jelly','greygoo','gelsplatter','ricojr','overlordrico','overlordricotrueform','comacho','wabbit','wallace','chimpy','robosassin',];

function MonsterSearch({ hide }: Props) {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([] as string[]);
  const [monsterName, setMonsterName] = useState('');

  const updateSearch = (search: string) => {
    setSearchText(search);

    const modifiedSearch = search
      .replace(/ .-'()/g, '')
      .replace('plus', '+')
      .toLowerCase();
    let newSearchResults = [];

    for (let i = 0; i < monsterList.length; i++) {
      if (monsterBaseList[i].includes(modifiedSearch)) {
        newSearchResults.push(monsterList[i]);

        if (newSearchResults.length >= 8) {
          break;
        }
      }
    }

    setSearchResults(newSearchResults);
  };

  const getMonster = async () => {
    // const res1 = await fetch('/tool/monsters');
    // const mon = await res1.json();
    // const monNames = [];
    // const monNamesMod = [];
    // for (const m in mon) {
    //   monNames.push(mon[m].name);
    //   monNamesMod.push(mon[m].name.replace(' ', '').replace('.', '').replace('-', ''));
    // }
    // console.log(monNames);
    // console.log(monNamesMod);
    if (searchText.length == 0) {
      return;
    }

    const modifiedSearch = searchText
      .replace(/ .-'()/g, '')
      .replace('plus', '+')
      .toLowerCase();
    let firstSearchResult = '';
    let displaySearchResult = '';

    for (let i = 0; i < monsterList.length; i++) {
      if (monsterBaseList[i].includes(modifiedSearch)) {
        displaySearchResult = monsterList[i];
        firstSearchResult = monsterBaseList[i];
        break;
      }
    }

    setSearchText(displaySearchResult);

    const res = await fetch('/tool/monster/' + firstSearchResult);

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
