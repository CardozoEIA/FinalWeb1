import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-character-list',
  imports: [CommonModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent {
  characterList: Character[] = [];

  constructor(private characterService: CharacterService, private router: Router){

  }

  ngOnInit(){
    this.getCharacters();
  }

  

  getCharacters(){
    this.characterService.getCharacters().subscribe()
  }

}
