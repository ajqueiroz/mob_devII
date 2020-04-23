import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-episodes',
    templateUrl: './episodes.page.html',
    styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {
    episodes: Observable<any>;
    constructor(private navController: NavController, private router: Router, private api: ApiService) { }
    ngOnInit() {
        this.episodes = this.api.getEpisodes();
      //  this.characters.subscribe(data => {
         //   console.log('my data: ', data);
     //   }); //
    }
    openDetails(episodes) {
        let episode = episodes.episode;
       this.router.navigateByUrl(`/tabs/episodes/${(episodes)}`);
    }
     goToCharacters() {
    this.navController.navigateRoot(`/tabs/characters`)
  }
  goToDeaths() {
    this.navController.navigateRoot(`/tabs/deaths`)
    
    }
}