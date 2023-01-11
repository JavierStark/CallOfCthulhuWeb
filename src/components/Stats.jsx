import './Stats.css';

import React, {useState} from 'react';

const Stats = () => {
  const [stats, setStats] = useState({});

  const roll = (n, dice) => {
    let result = 0;
    for (let i = 0; i < n; i++)
      result += Math.floor(Math.random() * dice + 1);// The maximum is inclusive and the

    console.log(result)
    return result;
  }

  const rollStats = () => {
    let newStats = {};
    for (let [k, v] in Object.entries(stats)) {
      if (['siz', 'int', 'edu', 'luck'].includes(k))
        newStats[k] = roll(2, 6) + 6;
      else
        newStats[k] = roll(3, 6);

      newStats[k] *= 5;
    }

    setStats(newStats);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setStats(previousInputs => {
      return {...previousInputs, [name]: value}
    });
    console.log(stats)
  }

  const handleSubmit = (event) => {

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Strength</label>
          <input type={'number'}
                 name={'str'}
                 value={stats['str'] || ''}
                 onChange={handleChange}/>
          <label>Constitution</label>
          <input type={'number'}
                 name={'con'}
                 value={stats['con'] || ''}
                 onChange={handleChange}/>
          <label>Dexterity</label>
          <input type={'number'}
                 name={'dex'}
                 value={stats['dex'] || ''}
                 onChange={handleChange}/>
          <label>Appearance</label>
          <input type={'number'}
                 name={'app'}
                 value={stats['app'] || ''}
                 onChange={handleChange}/>
          <label>Power</label>
          <input type={'number'}
                 name={'pow'}
                 value={stats['pow'] || ''}
                 onChange={handleChange}/>
        </div>
        <div>
          <label>Size</label>
          <input type={'number'}
                 name={'siz'}
                 value={stats['siz'] || ''}
                 onChange={handleChange}/>
          <label>Intelligence</label>
          <input type={'number'}
                 name={'int'}
                 value={stats['int'] || ''}
                 onChange={handleChange}/>
          <label>Education</label>
          <input type={'number'}
                 name={'edu'}
                 value={stats['edu'] || ''}
                 onChange={handleChange}/>
          <label>Luck</label>
          <input type={'number'}
                 name={'luck'}
                 value={stats['luck'] || ''}
                 onChange={handleChange}/>
        </div>
        <button type={'button'} name={'randomRoll'} onClick={rollStats}>Roll</button>
      </form>
    </div>
  );
};

export default Stats;