import React from 'react';
import logo from './logo.svg';
import './App.css';
import { IStatProps, IBaseStatTableProps,
  Stat, BaseStatTable } from './components/stat';
import { IAbilityProvider } from './mechanics/providers';
import { Ability } from './mechanics/ability';
import { Character } from './mechanics/character';


let brumgor: Character = new Character();
brumgor.str.score = 19;
brumgor.dex.score = 15;
brumgor.con.score = 19;
brumgor.int.score = 15;
brumgor.wis.score = 16;
brumgor.cha.score = 14;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BaseStatTable provider={brumgor} />
      </header>
    </div>
  );
}

export default App;
