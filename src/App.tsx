import React from 'react';
import './App.css';
import { AbilityTableComponent } from './components/ability';
import { SkillListComponent } from './components/skill';
import { Character } from './mechanics/character';
import { AthleticsSkill, InsightSkill, IntimidationSkill, SurvivalSkill } from './mechanics/skill';


let brumgor: Character = new Character();
brumgor.str.score = 19;
brumgor.dex.score = 15;
brumgor.con.score = 19;
brumgor.int.score = 15;
brumgor.wis.score = 16;
brumgor.cha.score = 14;
brumgor.proficiencyBonus = 2;
brumgor.proficientSkills.add(AthleticsSkill);
brumgor.proficientSkills.add(InsightSkill);
brumgor.proficientSkills.add(IntimidationSkill);
brumgor.proficientSkills.add(SurvivalSkill);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AbilityTableComponent provider={brumgor} />
        <SkillListComponent character={brumgor} />
      </header>
    </div>
  );
}

export default App;
