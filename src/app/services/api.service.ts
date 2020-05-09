import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
//API's reference page:https://breakingbadapi.com/documentation
    constructor(private http: HttpClient) { }
//Episodes APIs
    getEpisodes() {
        return this.http.get('https://www.breakingbadapi.com/api/episodes');
    }

    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
    }
//Characters APIs
    getCharacters() {
        return this.http.get('https://www.breakingbadapi.com/api/characters');
    }

    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
    }
 //Quotes APIs
    getQuotes() {
        return this.http.get('https://www.breakingbadapi.com/api/quotes');
    }

    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);
    }
//Death APIs
    getDeaths() {
        return this.http.get('https://www.breakingbadapi.com/api/deaths');
    }
    getDeath(id) {
         return this.http.get(`https://www.breakingbadapi.com/api/deaths/`);
    }

}


