import './Skills.css'
import {useEffect, useState} from "react";
import Skill from "./Skill.jsx";

const Skills = () => {

  const [currentSkills, setSkills] = useState({
    accounting: {
      min: 5,
      current: 5,

    },
    // animalHandling: {
    //   min: 0,
    //   current: 0,
    //
    // },
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
    artAndCraft: {
      min: 5,
      current: 5,

    },
    acting: {
      min: 0,
      current: 0,
      parent: true,
    },
    fineArt: {
      min: 0,
      current: 0,
      parent: true,

    },
    photography: {
      min: 0,
      current: 0,
      parent: true,

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
    // diving: {
    //   min: 0,
    //   current: 0,
    //
    // },
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
    firearmsHandgun: {
      min: 20,
      current: 20,

    },
    firearmsRifle_Shotgun: {
      min: 20,
      current: 20,

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

    },
    languageOther: {
      min: 1,
      current: 1,

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
    // operateHeavyMachinery: {
    //   min: 0,
    //   current: 0,
    //
    // },
    persuade: {
      min: 10,
      current: 10,

    },
    pilot: {
      min: 1,
      current: 1,

    },
    psychoanalysis: {
      min: 1,
      current: 1,

    },
    psychology: {
      min: 10,
      current: 10,

    },
    // readLips: {
    //   min: 0,
    //   current: 0,
    // },
    ride: {
      min: 5,
      current: 5,
    },
    science: {
      min: 1,
      current: 1,
    },
    astronomy: {
      min: 0,
      current: 0,
      parent: true,

    },
    biology: {
      min: 0,
      current: 0,
      parent: true,

    },
    botany: {
      min: 0,
      current: 0,
      parent: true,

    },
    chemistry: {
      min: 0,
      current: 0,
      parent: true,

    },
    cryptography: {
      min: 0,
      current: 0,
      parent: true,

    },
    forensics: {
      min: 0,
      current: 0,
      parent: true,

    },
    geology: {
      min: 0,
      current: 0,
      parent: true,

    },
    mathematics: {
      min: 0,
      current: 0,
      parent: true,

    },
    meteorology: {
      min: 0,
      current: 0,
      parent: true,

    },
    pharmacy: {
      min: 0,
      current: 0,
      parent: true,

    },
    physics: {
      min: 0,
      current: 0,
      parent: true,

    },
    zoology: {
      min: 0,
      current: 0,
      parent: true,

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

    }
  });

  const convertSkillPointStringToList = (pointsExpression) => {
    return pointsExpression.replace(' or ', ' ').replaceAll(' × ', '').replace('(', '').replace(')', '').replace(' + ', ' ').split(' ');
  }

  const calculatePoints = (pointsExpressionList, stats) => {
    let points = 0;
    let eduMultiplier = pointsExpressionList[0][3];
    points += stats.edu * eduMultiplier;

    if (pointsExpressionList.length < 2) return points;

    let secondStat = pointsExpressionList[1].replace(/[0-9]/, '');
    let secondOperator = stats[secondStat];

    if (pointsExpressionList.length === 3) {
      let thirdStat = pointsExpressionList[2].replace(/[0-9]/, '');

      secondOperator = stats[secondStat] > stats[thirdStat] ? stats[secondStat] : stats[thirdStat];
    }

    points += secondOperator * 2;

    return points;
  }

  const getSkillsPoint = () => {
    // /[,\s\$]/g
    const occupation = JSON.parse(window.localStorage.getItem('occupation'));
    const stats = JSON.parse(window.localStorage.getItem('stats'));

    let pointsExpression = occupation.occupationSkillsPoints.toLowerCase();

    let pointsExpressionList = convertSkillPointStringToList(pointsExpression);

    return calculatePoints(pointsExpressionList, stats);
  };

  const points = getSkillsPoint();
  const [currentPoints, changeCurrentPoints] = useState(0);


  const handleChange = (name, increment) => {
    console.log(name + " " + increment)
    const currentSkill = currentSkills[name];
    const min = currentSkill.min;
    const previousValue = currentSkill.current;
    const newValue = previousValue + increment;

    if (newValue < min && newValue > 75) return;

    if (!checkPointsLeft(previousValue, newValue)) return;

    changeCurrentPoints(prevPoints => prevPoints + (newValue - previousValue));

    setSkills(previousInputs => {
      return {...previousInputs, [name]: {...previousInputs[name], current: newValue}};
    });
  }

  const checkPointsLeft = (oldValue, newValue) => {
    let change = newValue - oldValue;

    return currentPoints + change <= 200;
  }


  return (
    <div>
      <div className={'calculations-container'}>
        <label className={'points-label'} htmlFor={'totalPoints'}> Total Points</label>
        <input className={'points-input'} type="number" disabled value={points} id={'totalPoints'}/>
        <label className={'points-label'} htmlFor={'currentPoints'}> Points Left</label>
        <input className={'points-input'} type="number" disabled value={points - currentPoints} id={'currentPoints'}/>
      </div>
      <div className={'skills-container'}>
        {
          Object.entries(currentSkills).map(([skill, value], index) => {
            return (
              <Skill name={skill} key={index}
                     min={value.min} value={value.current}
                     parent={value.parent}
                     handleChange={(name, increment) => handleChange(name, increment)}/>

            )
          })
        }
      </div>
    </div>
  );
};

export default Skills;