import React from "react";
import { Skill, AllSkills } from "../mechanics/skill";
import { ICharacter } from "../mechanics/character";


interface ISkillProps {
  character: ICharacter;
  skill: Skill;
}

export const SkillComponent = (props: ISkillProps) =>
  <>
    {
      (props.character.proficientSkills.indexOf(props.skill) >= 0 ? "\u25CF" : "\u25CB") + " "
      + props.skill.getMod(props.character) + " "
      + props.skill.name + " ("
      + props.skill.abilityType.shortName + ")"
    }
    <br />
  </>

interface ISkillListProps {
  character: ICharacter;
}

export const SkillListComponent = (props: ISkillListProps) => <>
  {AllSkills.map(s => <SkillComponent character={props.character} skill={s} />)}
</>;
