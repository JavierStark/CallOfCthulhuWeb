import './Skills.css'
import {useState} from "react";
import Skill from "./Skill.jsx";

const Skills = () => {

  const [currentSkills, setSkills] = useState({
    accounting: {
      min: 0,
      current: 0,

    },
    animalHandling: {
      min: 0,
      current: 0,

    },
    anthropology: {
      min: 0,
      current: 0,

    },
    appraise: {
      min: 0,
      current: 0,

    },
    archaeology: {
      min: 0,
      current: 0,

    },
    artAndCraft: {
      min: 0,
      current: 0,

      acting: {
        min: 0,
        current: 0,

      },
      fineArt: {
        min: 0,
        current: 0,

      },
      photography: {
        min: 0,
        current: 0,

      },
    },
    artillery: {
      min: 0,
      current: 0,

    },
    charm: {
      min: 0,
      current: 0,

    },
    climb: {
      min: 0,
      current: 0,

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
      min: 0,
      current: 0,

    },
    diving: {
      min: 0,
      current: 0,

    },
    dodge: {
      min: 0,
      current: 0,

    },
    driveAuto: {
      min: 0,
      current: 0,

    },
    electricalRepair: {
      min: 0,
      current: 0,

    },
    fastTalk: {
      min: 0,
      current: 0,

    },
    fighting: {
      min: 0,
      current: 0,

    },
    firearms: {
      min: 0,
      current: 0,

    },
    firstAid: {
      min: 0,
      current: 0,

    },
    history: {
      min: 0,
      current: 0,

    },
    intimidate: {
      min: 0,
      current: 0,

    },
    jump: {
      min: 0,
      current: 0,

    },
    languageOwn: {
      min: 0,
      current: 0,

    },
    languageOther: {
      min: 0,
      current: 0,

    },
    law: {
      min: 0,
      current: 0,

    },
    libraryUse: {
      min: 0,
      current: 0,

    },
    listen: {
      min: 0,
      current: 0,

    },
    locksmith: {
      min: 0,
      current: 0,

    },
    mechanicalRepair: {
      min: 0,
      current: 0,

    },
    medicine: {
      min: 0,
      current: 0,

    },
    naturalWorld: {
      min: 0,
      current: 0,

    },
    navigate: {
      min: 0,
      current: 0,

    },
    occult: {
      min: 0,
      current: 0,

    },
    operateHeavyMachinery: {
      min: 0,
      current: 0,

    },
    persuade: {
      min: 0,
      current: 0,

    },
    pilot: {
      min: 0,
      current: 0,

    },
    psychoanalysis: {
      min: 0,
      current: 0,

    },
    psychology: {
      min: 0,
      current: 0,

    },
    ride: {
      min: 0,
      current: 0,
    },
    science: {
      min: 0,
      current: 0,
      astronomy: {
        min: 0,
        current: 0,
      },
      biology: {
        min: 0,
        current: 0,
      },
      botany: {
        min: 0,
        current: 0,
      },
      chemistry: {
        min: 0,
        current: 0,
      },
      cryptography: {
        min: 0,
        current: 0,
      },
      forensics: {
        min: 0,
        current: 0,
      },
      geology: {
        min: 0,
        current: 0,
      },
      mathematics: {
        min: 0,
        current: 0,
      },
      meteorology: {
        min: 0,
        current: 0,
      },
      pharmacy: {
        min: 0,
        current: 0,
      },
      physics: {
        min: 0,
        current: 0,
      },
      zoology: {
        min: 0,
        current: 0,
      },
    },
    sleightOfHand: {
      min: 0,
      current: 0,
    },
    spotHidden: {
      min: 0,
      current: 0,

    },
    stealth: {
      min: 0,
      current: 0,

    },
    survival: {
      min: 0,
      current: 0,

    },
    swim: {
      min: 0,
      current: 0,

    },
    throw: {
      min: 0,
      current: 0,

    },
    track: {
      min: 0,
      current: 0,

    }
  });

  const convertSkillPointStringToList = (pointsExpression) => {
    return pointsExpression.replace(' or ', ' ').replaceAll(' ?? ', '').replace('(', '').replace(')', '').replace(' + ', ' ').split(' ');
  }

  const calculatePoints = (pointsExpressionList, stats) => {
    let points = 0;
    let eduMultiplier = pointsExpressionList[0][3];
    points += stats.edu * eduMultiplier;

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
  const [currentPoints, changeCurrentPoints] = useState(points);

  const handleChange = (event, parentSkill) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name + " " + value + " " + parentSkill)
    if (parentSkill) {
      setSkills(previousInputs => {
        return {...previousInputs, [parentSkill]: {...previousInputs[parentSkill], [name]: {current: value}}};
      });
    } else {
      setSkills(previousInputs => {
        return {...previousInputs, [name]: {current: value}};
      });
    }
  }


  return (
    <div>
      <div className={'calculations-container'}>
        <label className={'points-label'} htmlFor={'totalPoints'}> Total Points</label>
        <input className={'points-input'} type="number" disabled value={points} id={'totalPoints'}/>
        <label className={'points-label'} htmlFor={'currentPoints'}> Points Left</label>
        <input className={'points-input'} type="number" disabled value={currentPoints} id={'currentPoints'}/>
      </div>
      <div className={'skills-container'}>
        {
          Object.entries(currentSkills).map(([skill, value]) => {
            let valueEntries = Object.entries(value);
            let specializations;

            if (valueEntries.length > 3) {
              valueEntries = valueEntries.slice(2);
              specializations = valueEntries.map(([s, v]) =>
                <Skill
                  name={s}
                  key={s}
                  value={v.current || 0}
                  parent={skill}
                  handleChange={(event, parent) => handleChange(event, parent)}
                />)
            }

            return <>
              <Skill name={skill} key={skill} value={value.current || 0} handleChange={(e) => handleChange(e)}/>
              {specializations}
            </>
          })
        }
      </div>
    </div>
  );
};

export default Skills;