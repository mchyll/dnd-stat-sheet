export type AbilityType = {
    name: string;
}

export interface IAbility extends Ability {
    name: string;
    shortName: string;
    score: number;
    mod: number;
}

export class Ability implements IAbility {
    private _name: string;
    private _score: number;

    constructor(name: string, score: number) {
        if (score < 0 || score > 20) {
            throw new RangeError("Score outside legal range 0 <= x <= 20");
        }
        this._name = name;
        this._score = score;
    }

    get name(): string {
        return this._name;
    }

    get shortName(): string {
        return this._name.substr(0, 3);
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        if (value < 0 || value > 20) {
            throw new RangeError("Score outside legal range 0 <= x <= 20");
        }
        this._score = value;
    }

    get mod(): number {
        return Math.floor((this._score - 10) / 2);
    }
}
