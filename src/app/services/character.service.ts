import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private urlApi = 'http://localhost:3000/api/characters'
  
  constructor(private http: HttpClient) { }

  getCharacters(){
    return this.http.get<any[]>(this.urlApi);
  }
}