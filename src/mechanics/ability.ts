import { ICharacter } from "./character";

export class AbilityType {
    constructor(readonly name: string, readonly shortName: string) { }
}

export const StrAbility = new AbilityType("Strength", "STR");
export const DexAbility = new AbilityType("Dexterity", "DEX");
export const ConAbility = new AbilityType("Constitution", "CON");
export const IntAbility = new AbilityType("Intelligence", "INT");
export const WisAbility = new AbilityType("Wisdom", "WIS");
export const ChaAbility = new AbilityType("Charisma", "CHA");

export class AbilityScore {
    constructor(public readonly type: AbilityType, private _score: number) {
        if (_score < 0 || _score > 30) {
            throw new RangeError("Score outside legal range 0 <= x <= 30");
        }
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

export function getAbilityScore(character: ICharacter, type: AbilityType): AbilityScore {
    switch (type) {
        case StrAbility: return character.str;
        case DexAbility: return character.dex;
        case ConAbility: return character.con;
        case IntAbility: return character.int;
        case WisAbility: return character.wis;
        case ChaAbility: return character.cha;
        default: throw new Error("Illegal ability type");
    }
}