export interface IAbilityType {
    name: string;
    shortName: string;
}

export const StrAbility: IAbilityType = { name: "Strength", shortName: "STR" };
export const DexAbility: IAbilityType = { name: "Dexterity", shortName: "DEX" };
export const ConAbility: IAbilityType = { name: "Constitution", shortName: "CON" };
export const IntAbility: IAbilityType = { name: "Intelligence", shortName: "INT" };
export const WisAbility: IAbilityType = { name: "Wisdom", shortName: "WIS" };
export const ChaAbility: IAbilityType = { name: "Charisma", shortName: "CHA" };

export interface IAbilityScore {
    type: IAbilityType;
    score: number;
    mod: number;
}

export interface IAbilityScoreProvider {
    str: IAbilityScore;
    dex: IAbilityScore;
    con: IAbilityScore;
    int: IAbilityScore;
    wis: IAbilityScore;
    cha: IAbilityScore;
}

export class AbilityScore implements IAbilityScore {
    private _type: IAbilityType;
    private _score: number;

    constructor(type: IAbilityType, score: number) {
        if (score < 0 || score > 30) {
            throw new RangeError("Score outside legal range 0 <= x <= 30");
        }
        this._type = type;
        this._score = score;
    }

    get type(): IAbilityType {
        return this._type;
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        if (value < 0 || value > 30) {
            throw new RangeError("Score outside legal range 0 <= x <= 30");
        }
        this._score = value;
    }

    get mod(): number {
        return Math.floor((this._score - 10) / 2);
    }
}

export function getAbilityScore(provider: IAbilityScoreProvider, type: IAbilityType): IAbilityScore {
    switch (type) {
        case StrAbility: return provider.str;
        case DexAbility: return provider.dex;
        case ConAbility: return provider.con;
        case IntAbility: return provider.int;
        case WisAbility: return provider.wis;
        case ChaAbility: return provider.cha;
        default: throw new Error("Illegal ability type");
    }
}