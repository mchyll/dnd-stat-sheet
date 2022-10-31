import React from "react";
import { AbilityScore } from "../mechanics/ability";
import { ICharacter } from "../mechanics/character";


interface IAbilityProps {
  ability: AbilityScore;
  onclick: () => void;
}

export const AbilityComponent = (props: IAbilityProps) =>
  <div className="base-stat" onClick={props.onclick}>
    <div className="name">{props.ability.type.shortName}</div>
    <div className="mod">
      {props.ability.mod > 0 ?
        "+" + props.ability.mod :
        (props.ability.mod === 0 ? "0" : "-" + props.ability.mod)
      }
    </div>
    <div className="score">{props.ability.score}</div>
  </div>


interface IAbilityTableProps {
  character: ICharacter;
  onclick: () => void;
}

export const AbilityTableComponent = (props: IAbilityTableProps) =>
  <>
    <AbilityComponent ability={props.character.str} onclick={props.onclick} key={1} />
    <AbilityComponent ability={props.character.dex} onclick={props.onclick} key={2} />
    <AbilityComponent ability={props.character.con} onclick={props.onclick} key={3} />
    <AbilityComponent ability={props.character.int} onclick={props.onclick} key={4} />
    <AbilityComponent ability={props.character.wis} onclick={props.onclick} key={5} />
    <AbilityComponent ability={props.character.cha} onclick={props.onclick} key={6} />
  </>
