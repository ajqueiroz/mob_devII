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
    constructor(private navController: NavController, private router: Router, private api: ApiService) { }
    ngOnInit() {
        this.quotes = this.api.getquotes();
        this.quotes.subscribe(data => {
            console.log('my data: ', data);
        }); //
    }
    openDetails(quote) {
        let quotesId = quote.quote_id;
       this.router.navigateByUrl(`/tabs/quotes/${quotesId}`);
    }
    goToDeaths() {
    this.navController.navigateRoot(`/tabs/deaths`)
  }
}
