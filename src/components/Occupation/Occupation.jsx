import React, {useEffect, useState} from 'react';
import './Occupation.css'
import Occupations from '../../assets/Occupations/occupations.json'

const Occupation = () => {
  const [currentOccupation, setOccupation] = useState(Occupations[0]);

  useEffect(() => {
    console.log(currentOccupation)
  }, [currentOccupation])

  const handleChange = (name) => {
    setOccupation(Occupations.find(e => {
      return e.name === name;
    }));
  }

  return (<div className={'occupation-container'}>
    <form>
      <select name="" id="" className="selector" onChange={selected => handleChange(selected.target.value)}>
        {Occupations.map((e, i) =>
          <option value={e.name} key={i}>{e.name}</option>
        )}
      </select>
    </form>

    <div className={'info-div'}>
      <h3>Name:</h3>
      <p>{currentOccupation.name}</p>

      <h3>Description:</h3>
      <p>{currentOccupation.description}</p>

      <h3>Occupation Skills Points:</h3>
      <p>{currentOccupation.occupationSkillsPoints}</p>

      <h3>Credit Rating:</h3>
      <p>{currentOccupation.creditRating}</p>

      <h3>Suggested Contacts:</h3>
      <p>{currentOccupation.suggestedContacts}</p>

      <h3>Skills:</h3>
      <p>{currentOccupation.skills}</p>
    </div>
  </div>);
};

export default Occupation;

