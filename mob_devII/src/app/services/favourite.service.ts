
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'favouriteEpisodes';
const STORAGE_KEY_1= 'favouriteCharacter'


@Injectable({
    providedIn: 'root'
})
export class FavouriteService {

    constructor(private storage: Storage) { }

    getAllFavouriteEpisodes() {
        return this.storage.get(STORAGE_KEY);
    }

    isFavourite(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            return result && result.indexOf(episodeId) !== -1;
        });
    }

    favouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                result.push(episodeId);
                return this.storage.set(STORAGE_KEY, result);
            } else {
                return this.storage.set(STORAGE_KEY, [episodeId]);
            }
        });
    }

    unfavouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY, result);
            }
        });
    }
     getAllFavouriteCharacter() {
        return this.storage.get(STORAGE_KEY_1);
    }

    isFavouriteCharacter(characterId) {
        return this.getAllFavouriteCharacter().then(result => {
            return result && result.indexOf(characterId) !== -1;
        });
    }

    favouriteCharacter(characterId) {
        return this.getAllFavouriteCharacter().then(result => {
            if (result) {
                result.push(characterId);
                return this.storage.set(STORAGE_KEY_1, result);
            } else {
                return this.storage.set(STORAGE_KEY_1, [characterId]);
            }
        });
    }

    unfavouriteCharacter(characterId) {
        return this.getAllFavouriteCharacter().then(result => {
            if (result) {
                var index = result.indexOf(characterId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY_1, result);
            }
        });

}
}