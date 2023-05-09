import React from 'react';
import PropTypes from 'prop-types';

const Skill = props => {


  const formatSkillName = (skillName) => {
    let formattedSkillName = skillName.split(/(?=[A-Z])/).join(' ');
    return formattedSkillName.charAt(0).toUpperCase() + formattedSkillName.slice(1);
  }


  return (
    <div className={'skill-div'}>
      {!props.isSpec ?
        <label htmlFor={props.name} className={'skill-label'}>
          {formatSkillName(props.name)}
        </label> :
        <input
          style={{gridArea: 'a'}}
          className={'spec-placeholder'}
          type={"text"}
          name={props.name}
          placeholder={formatSkillName(props.name)}
          onChange={(e) => props.handleSpecNameChange(e)}
        >
        </input>
      }
      <input
        type="number"
        name={props.name}
        value={props.value || props.min}
        id={props.name}
        disabled
      />
      <button type={"button"} style={{gridArea: 'c'}} onClick={(e) => props.handleChange(props.name, -5)}>-5</button>
      <button type={"button"} style={{gridArea: 'd'}} onClick={(e) => props.handleChange(props.name, -1)}>-1</button>
      <button type={"button"} style={{gridArea: 'e'}} onClick={(e) => props.handleChange(props.name, 1)}>+1</button>
      <button type={"button"} style={{gridArea: 'f'}} onClick={(e) => props.handleChange(props.name, 5)}>+5</button>
    </div>
  );
};

Skill.propTypes = {};

export default Skill;