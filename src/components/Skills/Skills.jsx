import './Skills.css'
import {useEffect, useState} from "react";
import Skill from "./Skill.jsx";
import {useNavigate} from "react-router-dom";

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
    artAndCraftSpec1: {
      min: 5,
      current: 5,
      isSpec: true,
    },
    artAndCraftSpec2: {
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
    fightingBrawl: {
      min: 25,
      current: 25,
    },
    fightingSpec: {
      min: 25,
      current: 25,
      isSpec: true,
    },
    firearmsHandgun: {
      min: 20,
      current: 20,

    },
    firearmsRifle_Shotgun: {
      min: 25,
      current: 25,
    },
    firearmsSpec: {
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
    languageOwn: {
      min: 0,
      current: 0,
      isSpec: true,
    },
    languageOther: {
      min: 1,
      current: 1,
      isSpec: true,
    },
    languageSpec1: {
      min: 1,
      current: 1,
      isSpec: true,
    },
    languageSpec2: {
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
    pilotSpec: {
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
    scienceSpec1: {
      min: 1,
      current: 1,
      isSpec: true,
    },
    scienceSpec2: {
      min: 1,
      current: 1,
      isSpec: true,
    },
    scienceSpec3: {
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
    survivalSpec: {
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
    uncommon1: {
      min: 1,
      current: 1,
      isSpec: true,
    },
    uncommon2: {
      min: 1,
      current: 1,
      isSpec: true,
    },
    uncommon3: {
      min: 5,
      current: 5,
      isSpec: true,
    },
    uncommon4: {
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

    //[prevPoints[interestMode ? 1 : 0] + (newValue - previousValue)]
    changeCurrentPoints(prevPoints =>
      interestMode ? [prevPoints[0], prevPoints[1] + (newValue - previousValue)] : [prevPoints[0] + (newValue - previousValue), prevPoints[1]]
    );

    setSkills(previousInputs => {
      return {...previousInputs, [name]: {...previousInputs[name], current: newValue}};
    });
  }

  const handleSpecNameChange = (e) => {
    const defaultName = e.target.name;
    const newName = e.target.value;
    console.log(defaultName)
    setSkills(previousInputs => {
      return {...previousInputs, [defaultName]: {...previousInputs[defaultName], specName: newName}};
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
      console.log("Set")
      return;
    }
    console.log(currentSkills);
    window.localStorage.setItem("skills", JSON.stringify(currentSkills));

    navigate('/pdf-creator');
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className={'calculations-container'}>
        <label className={'points-label'} htmlFor={'totalPoints'}> Total Points</label>
        <input className={'points-input'} type="number" disabled value={interestMode ? interestPoints : points}
               id={'totalPoints'}/>
        <label className={'points-label'} htmlFor={'currentPoints'}> Points Left</label>
        <input className={'points-input'} type="number" disabled
               value={interestMode ? (interestPoints - currentPoints[1]) : (points - currentPoints[0])}
               id={'currentPoints'}/>

      </div>
      <div className={'skills-container'}>
        {
          Object.entries(currentSkills).map(([skill, value], index) => {
            return (
              <Skill name={skill} key={index}
                     min={value.min} value={value.current}
                     isSpec={value.isSpec}
                     handleChange={(name, increment) => handleChange(name, increment)}
                     handleSpecNameChange={(e) => handleSpecNameChange(e)}/>

            )
          })
        }
      </div>
      <button type={'submit'} className={''}>Submit</button>
    </form>
  );
};

export default Skills;