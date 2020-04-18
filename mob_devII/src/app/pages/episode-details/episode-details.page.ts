import { Component, OnInit } from '@angular/core';
import { FavouriteService } from './../../services/favourite.service';
import { ApiService } from './../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

 episodes: any;
  isFavourite = false;
  episodesId = null;
 
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService, private http: HttpClient) { }
 
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.episodesId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://breakingbadapi.com/api/episodes/${id}`).subscribe(res => {
      this.episodes = res;
    });
    this.api.getEpisode(this.episodesId).subscribe(res => {
      this.episodes = res;
    });
 
    this.favouriteService.isFavourite(this.episodesId).then(isFav => {
      this.isFavourite = isFav;
    });
  }
 
  favouriteEpisode() {
    this.favouriteService.favouriteEpisodes(this.episodesId).then(() => {
      this.isFavourite = true;
    });
  }
 
  unfavouriteEpisode() {
    this.favouriteService.unfavouriteEpisodes(this.episodesId).then(() => {
      this.isFavourite = false;
    });
  }
 

}
