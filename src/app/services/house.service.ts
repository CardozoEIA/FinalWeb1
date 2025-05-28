import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private urlApi = 'http://localhost:3000/api/houses'
  
  constructor(private http: HttpClient) { }

  getHouses(){
    return this.http.get<any[]>(this.urlApi);
  }
}