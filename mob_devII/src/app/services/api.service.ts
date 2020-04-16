import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  getEpisodes() {
      return this.http.get(`https://www.breakingbadapi.com/api/episodes`)
  }
  getEpisode(id) {
      return this.http.get(`https://breakingbadapi.com/api/episode/${id}`)
  }
  getCharacters() {
      return this.http.get(`https://www.breakingbadapi.com/api/characters`)
  }
    getCharacter(id) {
      return this.http.get(`https://breakingbadapi.com/api/characters/${id}`)
  }
  getquotes() {
      return this.http.get(`https://www.breakingbadapi.com/api/quotes`)
  }
  getdeath() {
      return this.http.get(`https://www.breakingbadapi.com/api/death`)
  }

}