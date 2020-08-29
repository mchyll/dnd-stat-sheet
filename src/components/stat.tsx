import React from "react";
import { IAbilityProvider } from "../mechanics/providers";

export interface IStatProps {
    name: string;
    score: number;
    mod: number;
}

export function Stat(props: IStatProps): React.ReactElement {
    return (
        <div className="base-stat">
            <div className="name">{props.name.toUpperCase()}</div>
            <div className="mod">{props.mod > 0 ? "+" + props.mod : (props.mod == 0 ? "0" : "-" + props.mod)}</div>
            <div className="score">{props.score}</div>
        </div>
    );
}

export interface IBaseStatTableProps {
    provider: IAbilityProvider;
}

export function BaseStatTable(props: IBaseStatTableProps): React.ReactElement {
    return (
        <div>
            {props.provider.getAbilities().map(a =>
                <Stat name={a.shortName} mod={a.mod} score={a.score} />
            )}
        </div>
    );
}
