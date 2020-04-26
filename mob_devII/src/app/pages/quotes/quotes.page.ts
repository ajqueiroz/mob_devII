import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { NavController } from '@ionic/angular';
@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.page.html',
    styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

    quotes: Observable<any>;
    items: string[];

    constructor(private navController: NavController, private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.quotes = this.api.getQuotes();
        this.quotes.subscribe(data => {
            console.log('my data', data);
        });
    }
  constructor2() {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
      'I am not in danger,Skyler.I am the danger!',
      'Stay out of my territory',
      'IFT',
      'Say my name',
      'I watched Jane die.I was there.And I watched her die.I wathched her overdose and choque to death'
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
    openDetails(quote) {
        let quoteId = quote.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${quoteId}`);
    }
    goToDeaths() {
        this.navController.navigateRoot(`/tabs/deaths`)
    }
    goToCharacters() {
        this.navController.navigateRoot(`/tabs/characters`)
    }
}