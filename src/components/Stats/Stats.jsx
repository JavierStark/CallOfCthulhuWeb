import './Stats.css';

import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const Stats = () => {
  const [stats, setStats] = useState({
    str: 0,
    con: 0,
    dex: 0,
    app: 0,
    pow: 0,
    siz: 0,
    int: 0,
    edu: 0,
    luck: 0,
    sanity: 0,
    hp: 0,
    db: 0,
    build: 0,
    mov: 0
  });
  const navigate = useNavigate();

  const roll = (n, dice) => {
    let result = 0;
    for (let i = 0; i < n; i++)
      result += Math.floor(Math.random() * dice + 1);
    return result;
  }

  const rollStats = () => {
    let newStats = {...stats};
    for (let k in newStats) {
      if (['sanity', 'hp', 'db', 'build', 'mov'].includes(k)) continue;
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
  }

  const updateOtherStats = () => {
    setStats(pS => {
      const getMov = () => {
        if (pS.dex === 0 || pS.siz === 0 || pS.str === 0) return 0;
        if (pS.dex < pS.siz && pS.str < pS.siz) return 7;
        if (pS.dex >= pS.siz || pS.str >= pS.siz) return 8;
        if (pS.dex > pS.siz && pS.str > pS.siz) return 9;
        return 0;
      }

      const getDBBuild = () => {
        let strSiz = pS.str + pS.siz;
        if (strSiz >= 2 && strSiz <= 64) {
          return [-2, -2];
        } else if (strSiz >= 65 && strSiz <= 84) {
          return [-1, -1];
        } else if (strSiz >= 85 && strSiz <= 124) {
          return ['None', 0];
        } else if (strSiz >= 125 && strSiz <= 164) {
          return ['+1D4', 1];
        } else if (strSiz >= 165 && strSiz <= 204) {
          return ['+1D6', 2];
        } else if (strSiz >= 205 && strSiz <= 284) {
          return ['+2D6', 3];
        } else if (strSiz >= 285 && strSiz <= 364) {
          return ['+3D6', 4];
        } else if (strSiz >= 365 && strSiz <= 444) {
          return ['+4D6', 5];
        } else if (strSiz >= 445 && strSiz <= 524) {
          return ['+5D6', 6];
        }
        return [0, 0];
      }

      const [db, build] = getDBBuild();

      return {
        ...pS,
        sanity: pS.pow,
        hp: Math.floor((pS.con + pS.siz) / 10),
        db: db,
        build: build,
        mov: getMov()
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let newStats = {};
    for (let t of event.target) {
      if (!t.value) continue;
      newStats = {...newStats, [t.name]: t.value};
    }
    console.log(newStats);
    window.localStorage.setItem("stats", JSON.stringify(newStats));

    navigate('/occupation');
  }

  useEffect(() => {
    updateOtherStats();
  }, [stats.str, stats.con, stats.dex, stats.app, stats.pow, stats.siz, stats.int, stats.edu, stats.luck]);


  return (
    <form onSubmit={handleSubmit}>
      <div className={'stats-container'}>
        <div className={'primary-stats stats'}>
          <div>
            <label>Strength</label>
            <input type={'number'}
                   name={'str'}
                   value={stats['str'] || 0}
                   onChange={handleChange}/>
          </div>
          <div>
            <label>Constitution</label>
            <input type={'number'}
                   name={'con'}
                   value={stats['con'] || 0}
                   onChange={handleChange}/>
          </div>
          <div>
            <label>Dexterity</label>
            <input type={'number'}
                   name={'dex'}
                   value={stats['dex'] || 0}
                   onChange={handleChange}/>
          </div>
          <div>
            <label>Appearance</label>
            <input type={'number'}
                   name={'app'}
                   value={stats['app'] || 0}
                   onChange={handleChange}/>
          </div>
          <div>
            <label>Power</label>
            <input type={'number'}
                   name={'pow'}
                   value={stats['pow'] || 0}
                   onChange={handleChange}/>
          </div>
        </div>
        <div className={'secondary-stats stats'}>
          <div>
            <label>Size</label>
            <input type={'number'}
                   name={'siz'}
                   value={stats['siz'] || 0}
                   onChange={handleChange}/>
          </div>
          <div>
            <label>Intelligence</label>
            <input type={'number'}
                   name={'int'}
                   value={stats['int'] || 0}
                   onChange={handleChange}/>
          </div>
          <div>
            <label>Education</label>
            <input type={'number'}
                   name={'edu'}
                   value={stats['edu'] || 0}
                   onChange={handleChange}/>
          </div>
          <div>
            <label>Luck</label>
            <input type={'number'}
                   name={'luck'}
                   value={stats['luck'] || 0}
                   onChange={handleChange}/>
          </div>
        </div>
        <button type={'button'} className={'roll-button'} name={'randomRoll'} onClick={rollStats}>Roll</button>

        <div className={'other-stats stats'}>
          <div>
            <label>Sanity</label>
            <input type={'number'}
                   name={'sanity'}
                   value={stats['sanity'] || 0}
                   disabled/>
          </div>
          <div>
            <label>Hit Points</label>
            <input type={'number'}
                   name={'hp'}
                   value={stats['hp'] || 0}
                   disabled/>
          </div>
          <div>
            <label>Damage Bonus</label>
            <input type={'text'}
                   name={'db'}
                   value={stats['db'] || 0}
                   disabled/>
          </div>
          <div>
            <label>Build</label>
            <input type={'number'}
                   name={'build'}
                   value={stats['build'] || 0}
                   disabled/>
          </div>
          <div>
            <label>Movement</label>
            <input type={'number'}
                   name={'mov'}
                   value={stats['mov'] || 0}
                   disabled/>
          </div>
        </div>

        <button type={'submit'} className={'submit-button'} name={'submitStats'}>Submit
        </button>
      </div>
    </form>
  );
};

export default Stats;