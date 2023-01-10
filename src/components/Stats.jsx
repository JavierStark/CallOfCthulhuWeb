import './Stats.css';

import React, {useState} from 'react';

const Stats = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({...inputs, [name]: value});
    console.log(inputs)
  }

  const handleSubmit = (event) => {

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type={'number'}
               name={'str'}
               value={inputs['str'] || ''}
               onChange={handleChange}/>
        <input type={'number'}
               name={'con'}
               value={inputs['con'] || ''}
               onChange={handleChange}/>
        <input type={'number'}
               name={'siz'}
               value={inputs['siz'] || ''}
               onChange={handleChange}/>
        <input type={'number'}
               name={'dex'}
               value={inputs['dex'] || ''}
               onChange={handleChange}/>
        <input type={'number'}
               name={'app'}
               value={inputs['app'] || ''}
               onChange={handleChange}/>
        <input type={'number'}
               name={'edu'}
               value={inputs['edu'] || ''}
               onChange={handleChange}/>
        <input type={'number'}
               name={'int'}
               value={inputs['int'] || ''}
               onChange={handleChange}/>
        <input type={'number'}
               name={'pow'}
               value={inputs['pow'] || ''}
               onChange={handleChange}/>
      </form>
    </div>
  );
};

export default Stats;