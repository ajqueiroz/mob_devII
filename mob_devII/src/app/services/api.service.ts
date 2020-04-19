import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  //Episodes APIs
  getEpisodes() {
      return this.http.get(`https://www.breakingbadapi.com/api/episodes`)
  }
  getEpisodesTitle(title) {
      return this.http.get(`https://www.breakingbadapi.com/api/episodes/${title}`)
  }
  getEpisodesAir_date(air_date) {
      return this.http.get(`https://www.breakingbadapi.com/api/episodes/${air_date}`)
  }
  getEpisodesSeason(season) {
      return this.http.get(`https://www.breakingbadapi.com/api/episodes/${season}`)
  }
  getEpisodesCharacters(characters) {
      return this.http.get(`https://www.breakingbadapi.com/api/episodes/${characters}`)
  }
  getEpisodesSeries(series) {
      return this.http.get(`https://www.breakingbadapi.com/api/episodes/${series}`)
  }
  getEpisode(id) {
      return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`)
  }
  //Characters APIs
  getCharacters() {
      return this.http.get(`https://www.breakingbadapi.com/api/characters`)
  }
    getCharacter(id) {
      return this.http.get(`https://breakingbadapi.com/api/characters/${id}`)
  }
  getCharacteCategory(category) {
      return this.http.get(`https://breakingbadapi.com/api/characters/${category}`)
  }
  getCharacterPortrayed(portrayed) {
      return this.http.get(`https://breakingbadapi.com/api/characters/${portrayed}`)
  }
  getCharacterAppearance(appearance) {
      return this.http.get(`https://breakingbadapi.com/api/characters/${appearance}`)
  }
  getCharacterBirthday(birthday) {
      return this.http.get(`https://breakingbadapi.com/api/characters/${birthday}`)
  }
   getCharacterName(name) {
      return this.http.get(`https://breakingbadapi.com/api/characters/${name}`)
  }
  //Quotes APIs
  getquotes() {
      return this.http.get(`https://www.breakingbadapi.com/api/quotes`)
  }
  getquote(id) {
      return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`)
  }
  getquoteAuthor(author) {
      return this.http.get(`https://breakingbadapi.com/api/quotes/${author}`)
  }
  getquoteSeries(series) {
      return this.http.get(`https://breakingbadapi.com/api/quotes/${series}`)
  }
  getquoteQuote(quote) {
      return this.http.get(`https://breakingbadapi.com/api/quotes/${quote}`)
  }
  //Death APIs
  getdeath() {
      return this.http.get(`https://www.breakingbadapi.com/api/deaths`)
  }
  getdeathId(id) {
      return this.http.get(`https://breakingbadapi.com/api/deaths/${id}`)
  }

  getdeathDeath(death) {
      return this.http.get(`https://www.breakingbadapi.com/api/deaths/${death}`)
  }
   getdeathCause(cause) {
      return this.http.get(`https://breakingbadapi.com/api/deaths/${cause}`)
  }
  getdeathSeason(season) {
      return this.http.get(`https://breakingbadapi.com/api/deaths/${season}`)
  }
  getdeathEpisode(episode) {
      return this.http.get(`https://breakingbadapi.com/api/deaths/${episode}`)
  }

}