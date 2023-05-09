import React, {useEffect, useState} from 'react';
import './Occupation.css'
import Occupations from '../../assets/Occupations/occupations.json'
import {useNavigate} from "react-router-dom";

const Occupation = () => {

  const [currentOccupation, setOccupation] = useState(Occupations[0])

  const navigate = useNavigate();


  const handleChange = (name) => {
    setOccupation(Occupations.find(e => {
      return e.name === name;
    }));
  }

  const randomOccupation = () => {
    setOccupation(Occupations[Math.floor(Math.random() * Occupations.length)]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(currentOccupation);
    window.localStorage.setItem("occupation", JSON.stringify(currentOccupation));

    navigate('/skills');
  }

  return (<div className={'occupation-container'}>
    <form className={'occupation-form'} onSubmit={handleSubmit}>
      <select className={'occupation-select'} value={currentOccupation.name}
              onChange={selected => handleChange(selected.target.value)}>
        {Occupations.map((e, i) =>
          <option value={e.name} key={i}>{e.name}</option>
        )}
      </select>
      <button type={'button'} className={'random-button'} onClick={randomOccupation}>Randomize🎲</button>

      <div className={'info-div'}>
        <h3>Name:</h3>
        <p>{currentOccupation.name}</p>

        <h3>Description:</h3>
        <p>{currentOccupation.description}</p>

        <h3>Occupation Skills Points:</h3>
        <p>{currentOccupation.occupationSkillsPoints}</p>

        <h3>Credit Rating:</h3>
        <p>{currentOccupation.creditRating[0] + "-" + currentOccupation.creditRating[1]}</p>

        <h3>Suggested Contacts:</h3>
        <p>{currentOccupation.suggestedContacts}</p>

        <h3>Skills:</h3>
        <p>{currentOccupation.skills}</p>
      </div>

      <button type={'submit'} className={'submit-occupations-button'} name={'submitStats'}>Submit
      </button>
    </form>

  </div>);
};

export default Occupation;

