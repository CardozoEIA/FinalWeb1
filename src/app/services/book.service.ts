import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private urlApi = 'http://localhost:3000/api/books'
  
  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get<any[]>(this.urlApi);
  }
}