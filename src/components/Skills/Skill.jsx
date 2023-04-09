import React from 'react';
import PropTypes from 'prop-types';

const Skill = props => {


  const formatSkillName = (skillName) => {
    let formattedSkillName = skillName.split(/(?=[A-Z])/).join(' ');
    return formattedSkillName.charAt(0).toUpperCase() + formattedSkillName.slice(1);
  }


  return (
    <div className={'skill-div'}>
      <label htmlFor={props.name} className={'skill-label'}>
        {(props.parent ? '-----' : '') + formatSkillName(props.name)}
      </label>
      <input
        type="number"
        name={props.name}
        value={props.value || 0}
        id={props.name}
        onChange={(event) => props.handleChange(event, props.parent)}
      />
    </div>
  );
};

Skill.propTypes = {};

export default Skill;