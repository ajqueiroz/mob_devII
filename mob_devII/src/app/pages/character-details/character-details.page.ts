import { Component, OnInit } from '@angular/core';
import { FavouriteService } from './../../services/favourite.service';
import { ApiService } from './../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharactersDetailsPage implements OnInit {

 characters: any;
  isFavourite = false;
  charactersId = null;
 
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService,
     private favouriteService: FavouriteService, private http: HttpClient) { }
 
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.charactersId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://breakingbadapi.com/api/characters/${id}`).subscribe(res => {
      this.characters = res;
    });
    this.api.getCharacter(this.charactersId).subscribe(res => {
      this.characters = res;
    });
 
    this.favouriteService.isFavourite(this.charactersId).then(isFav => {
      this.isFavourite = isFav;
    });
  }
 
  favouriteCharacters() {
    this.favouriteService.favouriteCharacters(this.charactersId).then(() => {
      this.isFavourite = true;
    });
  }
 
  unfavouriteCharacters() {
    this.favouriteService.unfavouriteEpisodes(this.charactersId).then(() => {
      this.isFavourite = false;
    });
  }
 

}
