import * as React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { CharacterContext } from "./context/character.context";
import ICharacterData from './types/character.type';
import "./App.css";

import { CharacterView } from "./components/character-view.component";
import { CharactersList } from "./components/characters-list.component";
import NotFound from "./components/404";

export const App = () => {
  const [allCharacters, setAllCharacters] = React.useState<Array<ICharacterData>>([]);
  const [characters, setCharacters] = React.useState<Array<ICharacterData>>([]);
  return (
    <CharacterContext.Provider
      value={{ allCharacters, setAllCharacters, characters, setCharacters }}
    >
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/characters"} className="navbar-brand">
            The Rick and Morty 
          </Link>
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/characters"]} component={CharactersList} />
            <Route path="/character/:id" component={CharacterView} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </CharacterContext.Provider>
  );
}

export default App;
