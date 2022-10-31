import React from 'react';
import './App.css';
import { AbilityTableComponent } from './components/ability';
import { SkillListComponent } from './components/skill';
import { Character, ICharacter } from './mechanics/character';
import { AthleticsSkill, InsightSkill, IntimidationSkill, SurvivalSkill } from './mechanics/skill';


let brumgor: Character = new Character();
brumgor.str.score = 19;
brumgor.dex.score = 15;
brumgor.con.score = 19;
brumgor.int.score = 15;
brumgor.wis.score = 16;
brumgor.cha.score = 14;
brumgor.proficiencyBonus = 2;
brumgor.proficientSkills.push(AthleticsSkill);
brumgor.proficientSkills.push(InsightSkill);
brumgor.proficientSkills.push(IntimidationSkill);
brumgor.proficientSkills.push(SurvivalSkill);
console.log(JSON.stringify(brumgor));

interface ICharacterPS { character: ICharacter; }
class CharacterComponent extends React.Component<{}, ICharacterPS> {

  constructor(props: {}) {
    super(props);
    this.state = { character: brumgor };
  }

  increaseStr() {
    console.log("YEAH");
    console.log(this.state);
    // this.setState(state => ({
    //   ...state,
    //   character: {
    //     ...state.character,
    //     str: {
    //       ...state.character.str,
    //       score: state.character.str.score + 1
    //     }
    //   }
    // }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AbilityTableComponent character={brumgor} onclick={() => this.increaseStr()} />
          <SkillListComponent character={brumgor} />
        </header>
      </div>
    );
  }
}

export default CharacterComponent;
