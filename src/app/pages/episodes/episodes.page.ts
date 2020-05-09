import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { NavController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
    selector: 'app-episodes',
    templateUrl: './episodes.page.html',
    styleUrls: ['./episodes.page.scss'],
    
})

export class EpisodesPage implements OnInit {

    episodes: Observable<any>;
searchQuery: string = '';
  items: string[];

    constructor(private navController: NavController,private router: Router,
         private api: ApiService) { }

    ngOnInit() {
        this.episodes = this.api.getEpisodes();
        this.episodes.subscribe(data => {
        console.log('my data', data);
        });
        
    }
    constructor2() {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
      'Pilot',
      'Cat/s/ in the Bag',
      '...And the Bag in the River',
      'Cancer Man',
      'Gray Matter'
    ];
  }
   getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

    openDetails(episode) {
        let episodeId = episode.episode_id;        
        this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
    }
   goToCharacters() {
    this.navController.navigateRoot(`/tabs/characters`)
  }
  goToDeath() {
    this.navController.navigateRoot(`/tabs/deaths`)
    
    }
}