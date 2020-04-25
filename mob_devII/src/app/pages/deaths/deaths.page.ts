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

    constructor(private navController: NavController,private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.deaths = this.api.getDeaths();
        this.deaths.subscribe(data => {
            console.log('my data', data);
            });
    }
    openDetails(deaths) {
        let deathId= deaths.deathId;        
        this.router.navigateByUrl(`/tabs/deaths/${deathId}`);
    }
     goToEpisodes() {
    this.navController.navigateRoot(`/tabs/episodes`)
  }
  goToQuotes() {
    this.navController.navigateRoot(`/tabs/quotes`)
  }
}