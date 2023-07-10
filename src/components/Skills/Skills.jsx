import './Skills.css'
import { useEffect, useState } from "react";
import Skill from "./Skill.jsx";
import { useNavigate } from "react-router-dom";

const Skills = () => {

  const [currentSkills, setSkills] = useState({
    accounting: {
      min: 5,
      current: 5,
    },
    anthropology: {
      min: 1,
      current: 1,
    },
    appraise: {
      min: 5,
      current: 5,
    },
    archaeology: {
      min: 1,
      current: 1,

    },
    artCraft1: {
      min: 5,
      current: 5,
      isSpec: true,
    },
    artCraft2: {
      min: 5,
      current: 5,
      isSpec: true,
    },
    // artillery: {
    //   min: 0,
    //   current: 0,
    //
    // },
    charm: {
      min: 15,
      current: 15,
    },
    climb: {
      min: 20,
      current: 20,

    },
    creditRating: {
      min: 0,
      current: 0,

    },
    cthulhuMythos: {
      min: 0,
      current: 0,

    },
    disguise: {
      min: 5,
      current: 5,

    },
    dodge: {
      min: 0,
      current: 0,

    },
    driveAuto: {
      min: 20,
      current: 20,

    },
    electricalRepair: {
      min: 10,
      current: 10,

    },
    fastTalk: {
      min: 5,
      current: 2,

    },
    fighting: {
      min: 25,
      current: 25,
    },
    fighting1: {
      min: 25,
      current: 25,
      isSpec: true,
    },
    fighting2: {
      min: 25,
      current: 25,
      isSpec: true,
    },
    fireArmsHandguns: {
      min: 20,
      current: 20,

    },
    fireArmsRifles: {
      min: 25,
      current: 25,
    },
    fireArms: {
      min: 25,
      current: 25,
      isSpec: true,
    },
    firstAid: {
      min: 30,
      current: 30,

    },
    history: {
      min: 5,
      current: 5,

    },
    intimidate: {
      min: 15,
      current: 15,

    },
    jump: {
      min: 20,
      current: 20,

    },
    ownLanguage: {
      min: 0,
      current: 0,
      isSpec: true,
    },
    otherLanguage: {
      min: 1,
      current: 1,
      isSpec: true,
    },
    otherLanguage1: {
      min: 1,
      current: 1,
      isSpec: true,
    },
    otherLanguage2: {
      min: 1,
      current: 1,
      isSpec: true,
    },
    law: {
      min: 5,
      current: 5,

    },
    libraryUse: {
      min: 20,
      current: 20,

    },
    listen: {
      min: 20,
      current: 20,

    },
    locksmith: {
      min: 1,
      current: 1,

    },
    mechanicalRepair: {
      min: 10,
      current: 10,

    },
    medicine: {
      min: 1,
      current: 1,

    },
    naturalWorld: {
      min: 10,
      current: 10,

    },
    navigate: {
      min: 10,
      current: 10,

    },
    occult: {
      min: 5,
      current: 5,

    },
    persuade: {
      min: 10,
      current: 10,

    },
    pilot: {
      min: 1,
      current: 1,
      isSpec: true,
    },
    psychoanalysis: {
      min: 1,
      current: 1,

    },
    psychology: {
      min: 10,
      current: 10,

    },
    ride: {
      min: 5,
      current: 5,
    },
    science1: {
      min: 1,
      current: 1,
      isSpec: true,
    },
    science2: {
      min: 1,
      current: 1,
      isSpec: true,
    },
    science3: {
      min: 1,
      current: 1,
      isSpec: true,
    },
    sleightOfHand: {
      min: 10,
      current: 0,
    },
    spotHidden: {
      min: 0,
      current: 0,

    },
    stealth: {
      min: 20,
      current: 20,

    },
    survival: {
      min: 10,
      current: 10,
      isSpec: true,
    },
    swim: {
      min: 20,
      current: 20,

    },
    throw: {
      min: 20,
      current: 20,

    },
    track: {
      min: 10,
      current: 10,

    },
    custom1: {
      min: 1,
      current: 1,
      isSpec: true,
    },
    custom2: {
      min: 1,
      current: 1,
      isSpec: true,
    },
    custom3: {
      min: 5,
      current: 5,
      isSpec: true,
    },
    custom4: {
      min: 5,
      current: 5,
      isSpec: true,
    },
  });
  const [interestMode, setInterestMode] = useState(false);
  const navigate = useNavigate();


  const convertSkillPointStringToList = (pointsExpression) => {
    return pointsExpression.replace(' or ', ' ').replaceAll(' × ', '').replace('(', '').replace(')', '').replace(' + ', ' ').split(' ');
  }

  const calculatePoints = (pointsExpressionList, stats) => {
    let points = 0;
    const interestPoints = stats['int'];
    let eduMultiplier = pointsExpressionList[0][3];
    points += stats.edu * eduMultiplier;

    if (pointsExpressionList.length < 2) return [points, interestPoints];

    let secondStat = pointsExpressionList[1].replace(/[0-9]/, '');
    let secondOperator = stats[secondStat];

    if (pointsExpressionList.length === 3) {
      let thirdStat = pointsExpressionList[2].replace(/[0-9]/, '');

      secondOperator = stats[secondStat] > stats[thirdStat] ? stats[secondStat] : stats[thirdStat];
    }

    points += secondOperator * 2;

    return [points, interestPoints];
  }

  const getSkillsPoint = () => {
    // /[,\s\$]/g
    const occupation = JSON.parse(window.localStorage.getItem('occupation'));
    const stats = JSON.parse(window.localStorage.getItem('stats'));

    let pointsExpression = occupation.occupationSkillsPoints.toLowerCase();

    let pointsExpressionList = convertSkillPointStringToList(pointsExpression);


    return calculatePoints(pointsExpressionList, stats);
  };

  const [points, interestPoints] = getSkillsPoint();
  const [currentPoints, changeCurrentPoints] = useState([0, 0]);


  const handleChange = (name, increment) => {
    const currentSkill = currentSkills[name];
    const min = currentSkill.min;
    const previousValue = currentSkill.current;
    let newValue = previousValue + increment;

    if (newValue > 75) return;
    if (newValue < min) newValue = min;

    if (!checkPointsLeft(previousValue, newValue)) return;
    console.log(newValue + " " + min)

    let change = newValue - previousValue
    //[prevPoints[interestMode ? 1 : 0] + (newValue - previousValue)]
    changeCurrentPoints(prevPoints =>
      interestMode ? [prevPoints[0], prevPoints[1] + change] : [prevPoints[0] + change, prevPoints[1]]
    );

    setSkills(previousInputs => {
      return { ...previousInputs, [name]: { ...previousInputs[name], current: newValue } };
    });
  }

  const handleSpecNameChange = (e) => {
    const defaultName = e.target.name;
    const newName = e.target.value;
    console.log(defaultName)
    setSkills(previousInputs => {
      return { ...previousInputs, [defaultName]: { ...previousInputs[defaultName], specName: newName } };
    });
  }

  const checkPointsLeft = (oldValue, newValue) => {
    let change = newValue - oldValue;

    return currentPoints[interestMode ? 1 : 0] + change <= (interestMode ? interestPoints : points);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!interestMode) {
      setInterestMode(true);
      window.scroll(0, 0);
      return;
    }
    console.log(currentSkills);
    window.localStorage.setItem("skills", JSON.stringify(currentSkills));

    navigate('/pdf-creator');
  }


  return (
    <form onSubmit={handleSubmit} >
      <div className={'calculations-container'}>
        <label className={'points-label'} htmlFor={'totalPoints'}> Total Points</label>
        <input className={'points-input'} type="number" disabled value={interestMode ? interestPoints : points}
          id={'totalPoints'} />
        <label className={'points-label'} htmlFor={'currentPoints'}> Points Left</label>
        <input className={'points-input'} type="number" disabled
          value={interestMode ? (interestPoints - currentPoints[1]) : (points - currentPoints[0])}
          id={'currentPoints'} />
      </div>
      {
        interestMode ?
          <div className={'calculations-container'}>
            Add points only to the following interest skills:
            <br />
            {JSON.parse(window.localStorage.getItem('occupation')).skills}
          </div> : <></>
      }
      <div className={'skills-container'}>
        {
          Object.entries(currentSkills).map(([skill, value], index) => {
            return (
              <Skill name={skill} key={index}
                min={value.min} value={value.current}
                isSpec={value.isSpec}
                handleChange={(name, increment) => handleChange(name, increment)}
                handleSpecNameChange={(e) => handleSpecNameChange(e)} />

            )
          })
        }
      </div>
      <button type={'submit'} className={''}>{interestMode ? 'Download Pdf' : 'Submit'}</button>
    </form>
  );
};

export default Skills;