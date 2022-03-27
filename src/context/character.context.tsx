import React from 'react';
import ICharacterData from '../types/character.type';

interface ICharacterContext {
    allCharacters: Array<ICharacterData>;
    setAllCharacters: (_value:Array<ICharacterData>) => void;
    characters: Array<ICharacterData>;
    setCharacters: (_value:Array<ICharacterData>) => void;
}

const defaultState = {
    allCharacters:[],
    setAllCharacters:() => {},
    characters: [],
    setCharacters: () => {}
};

export const CharacterContext = React.createContext<ICharacterContext>(defaultState);