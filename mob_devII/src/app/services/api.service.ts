import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export enum SearchType {
  all = '',
  episodes = 'episodes',
  quotes = 'quotes',
  characters = 'characters'
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
 
  //Episodes APIs
  getEpisodes() {
      return this.http.get(`https://www.breakingbadapi.com/api/episodes`);
  }
  getEpisodesTitle(title) {
      return this.http.get(`https://www.breakingbadapi.com/api/episodes/${encodeURI(title)}`);
  }
  getEpisodesAir_date(air_date) {
      return this.http.get(`https://www.breakingbadapi.com/api/episodes/${encodeURI(air_date)}`);
  }
  getEpisodesSeason(season) {
      return this.http.get(`https://www.breakingbadapi.com/api/episodes/${encodeURI(season)}`);
  }
  getEpisodesCharacters(characters) {
      return this.http.get(`https://www.breakingbadapi.com/api/episodes/${encodeURI(characters)}`);
  }
  getEpisodesSeries(series) {
      return this.http.get(`https://www.breakingbadapi.com/api/episodes/${encodeURI(series)}`);
  }
  getEpisode(id) {
      return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`);
  }
  //Characters APIs
  getCharacters() {
      return this.http.get(`https://www.breakingbadapi.com/api/characters`);
  }
    getCharacter(id) {
      return this.http.get(`https://breakingbadapi.com/api/characters/${id}`);
  }
  getCharacteCategory(category) {
      return this.http.get(`https://breakingbadapi.com/api/characters/${encodeURI(category)}`);
  }
  getCharacterPortrayed(portrayed) {
      return this.http.get(`https://breakingbadapi.com/api/characters/${encodeURI(portrayed)}`);
  }
  getCharacterAppearance(appearance) {
      return this.http.get(`https://breakingbadapi.com/api/characters/${encodeURI(appearance)}`);
  }
  getCharacterBirthday(birthday) {
      return this.http.get(`https://breakingbadapi.com/api/characters/${encodeURI(birthday)}`);
  }
   getCharacterName(name) {
      return this.http.get(`https://breakingbadapi.com/api/characters/${encodeURI(name)}`);
  }
  //Quotes APIs
  /**
    * Data from the BreakingBad Api 
    * code reference:  
    * https://www.freecodecamp.org/news/how-to-build-your-first-ionic-4-app-with-api-calls-f6ea747dc17a/
    */
  getquotes() {
      return this.http.get(`https://www.breakingbadapi.com/api/quotes/`);
  }
    getquotes1(name: string) {
      return this.http.get(`https://www.breakingbadapi.com/api/quotes${encodeURI(name)}`);
  }
  getquote(id) {
      return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`);
  }
  getquoteAuthor(author) {
      return this.http.get(`https://breakingbadapi.com/api/quotes/${encodeURI(author)}`);
  }
  getquoteSeries(series) {
      return this.http.get(`https://breakingbadapi.com/api/quotes/${encodeURI(series)}`);
  }
  getquoteQuote(quote) {
      return this.http.get(`https://breakingbadapi.com/api/quotes/${encodeURI(quote)}`);
  }
  getquoteQuoteId(id) {
      return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`);
  }
  //Death APIs
   getdeath() {
      return this.http.get(`https://breakingbadapi.com/api/deaths/`);
  }

  getdeath1(name: string) {
      return this.http.get(`https://breakingbadapi.com/api/deaths/${encodeURI(name)}`);
  }

}