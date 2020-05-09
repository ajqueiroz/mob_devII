import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { NavController } from '@ionic/angular';
@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],

})
export class DeathsPage implements OnInit {

    deaths: Observable<any>;
    searchQuery: string = '';
    items: string[];

    constructor(private navController: NavController, private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.deaths = this.api.getDeaths();
        this.deaths.subscribe(data => {
            console.log('my data', data);
        });
        
    }
     constructor2() {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
      'Bodyguards of Gus Firing',
      'Cartel Assassins',
      'Rival Dealers',
      'Juarez Cartel members',
      'Juan Bolsa bodyguards'
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
    openDetails(deaths) {
        let deathId = deaths.deathId;
        this.router.navigateByUrl(`/tabs/deaths/${deathId}`);
    }
    goToEpisodes() {
        this.navController.navigateRoot(`/tabs/episodes`)
    }
    goToQuotes() {
        this.navController.navigateRoot(`/tabs/quotes`)
    }
}