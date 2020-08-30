import React from "react";
import { IAbilityScore, IAbilityScoreProvider } from "../mechanics/ability";


interface IAbilityProps {
    ability: IAbilityScore;
}

export const AbilityComponent = (props: IAbilityProps): React.ReactElement => (
    <div className="base-stat">
        <div className="name">{props.ability.type.shortName}</div>
        <div className="mod">{props.ability.mod > 0 ? "+" + props.ability.mod : (props.ability.mod === 0 ? "0" : "-" + props.ability.mod)}</div>
        <div className="score">{props.ability.score}</div>
    </div>
);

interface IAbilityTableProps {
    provider: IAbilityScoreProvider;
}

export const AbilityTableComponent = (props: IAbilityTableProps): React.ReactElement => (
    <>
        <AbilityComponent ability={props.provider.str} />
        <AbilityComponent ability={props.provider.dex} />
        <AbilityComponent ability={props.provider.con} />
        <AbilityComponent ability={props.provider.int} />
        <AbilityComponent ability={props.provider.wis} />
        <AbilityComponent ability={props.provider.cha} />
    </>
);
