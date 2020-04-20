import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
    characters: Observable<any>;
    constructor(private navController: NavController, private router: Router, private api: ApiService) { }
    ngOnInit() {
        this.characters = this.api.getCharacters();
        this.characters.subscribe(data => {
            console.log('my data: ', data);
        }); //
    }
    openDetails(characters) {
        let characterId = characters.character_id;
       this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    }
     goToQuotes() {
    this.navController.navigateRoot(`/tabs/quotes`)
  }
  goToEpisodes() {
    this.navController.navigateRoot(`/tabs/episodes`)
    
    }
}