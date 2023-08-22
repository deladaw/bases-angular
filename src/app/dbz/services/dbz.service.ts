import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 90,
      id: uuid(),
    },
    {
      name: 'Bulma',
      power: 40,
      id: uuid(),
    },
    {
      name: 'Goku',
      power: 10000,
      id: uuid(),
    },
    {
      name: 'Vegeta',
      power: 8000,
      id: uuid(),
    },
    {
      name: 'Trunks',
      power: 2000,
      id: uuid(),
    },
  ];

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }

  addCharacter(character: Character): void {
    console.log('Service');
    console.log(character);
    const newCharacter: Character = { ...character, id: uuid() };
    this.characters.unshift(newCharacter);
  }
}
