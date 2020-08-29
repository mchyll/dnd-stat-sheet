import { IAbility } from "./ability";


export interface IAbilityProvider {
    getAbilities(): IAbility[];
    getStr(): IAbility;
    getDex(): IAbility;
    getCon(): IAbility;
    getInt(): IAbility;
    getWis(): IAbility;
    getCha(): IAbility;
}
