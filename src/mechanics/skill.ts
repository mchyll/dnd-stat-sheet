import { IAbility } from "./ability";


export interface ISkill {
    name: string;
    baseStat: IAbility;
    proficient: boolean;
    mod: number;
}
