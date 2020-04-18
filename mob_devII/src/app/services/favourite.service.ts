import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'favouriteEpisodes';
const STORAGE_KEY_1 = 'favouriteCharacters';
const STORAGE_KEY_2 = 'favouriteQuotes';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

   constructor(private storage: Storage) { }
 
  getAllFavouriteEpisodes() {
    return this.storage.get(STORAGE_KEY);
  }
 
  isFavourite(episodesId) {
    return this.getAllFavouriteEpisodes().then(result => {
      return result && result.indexOf(episodesId) !== -1;
    });
  }
 
  favouriteEpisodes(episodesId) {
    return this.getAllFavouriteEpisodes().then(result => {
      if (result) {
        result.push(episodesId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [episodesId]);
      }
    });
  }
 
  unfavouriteEpisodes(episodesId) {
    return this.getAllFavouriteEpisodes().then(result => {
      if (result) {
        var index = result.indexOf(episodesId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
 
  getAllFavouriteCharacters() {
    return this.storage.get(STORAGE_KEY_1);
  }
 
  isFavourite_1(charactersId) {
    return this.getAllFavouriteCharacters().then(result => {
      return result && result.indexOf(charactersId) !== -1;
    });
  }
 
  favouriteCharacters(charactersId) {
    return this.getAllFavouriteCharacters().then(result => {
      if (result) {
        result.push(charactersId);
        return this.storage.set(STORAGE_KEY_1, result);
      } else {
        return this.storage.set(STORAGE_KEY_1, [charactersId]);
      }
    });
  }
 
  unfavouriteCharacters(charactersId) {
    return this.getAllFavouriteCharacters().then(result => {
      if (result) {
        var index = result.indexOf(charactersId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY_1, result);
      }
    });
  }
 
  getAllFavouriteQuotes() {
    return this.storage.get(STORAGE_KEY_2);
  }
 
  isFavourite_2(quotesId) {
    return this.getAllFavouriteQuotes().then(result => {
      return result && result.indexOf(quotesId) !== -1;
    });
  }
 
  favouriteQuotes(quotesId) {
    return this.getAllFavouriteQuotes().then(result => {
      if (result) {
        result.push(quotesId);
        return this.storage.set(STORAGE_KEY_2, result);
      } else {
        return this.storage.set(STORAGE_KEY_2, [quotesId]);
      }
    });
  }
 
  unfavouriteQuotes(quotesId) {
    return this.getAllFavouriteQuotes().then(result => {
      if (result) {
        var index = result.indexOf(quotesId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY_2, result);
      }
    });
  }
 
}
