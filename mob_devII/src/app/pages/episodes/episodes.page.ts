import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';
import {  NavController, NavParams } from '@ionic/angular';

@Component({
    selector: 'app-episodes',
    templateUrl: './episodes.page.html',
    styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {
    episodes: Observable<any>;
    constructor( private navController: NavController, private router: Router,
         private api: ApiService, private http: HttpClient) { }
    ngOnInit() {
        this.episodes = this.api.getEpisodes();
        this.episodes.subscribe(data => {
            console.log('my data: ', data);
        }); //
    }
    openDetails(episode) {
        let episodeId = episode.episode_id;
       this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
        let episodeTitle = episode.title;
       this.router.navigateByUrl(`/tabs/episodes/${episodeTitle}`);
  }
   goToCharacters() {
    this.navController.navigateRoot(`/tabs/characters`)
    }
}