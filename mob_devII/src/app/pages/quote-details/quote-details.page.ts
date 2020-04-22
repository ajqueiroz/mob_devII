import { Component, OnInit } from '@angular/core';
import { FavouriteService } from './../../services/favourite.service';
import { ApiService } from './../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
    
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.page.html',
  styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {

   quotes: any;
  isFavourite = false;
  quotesId = null;
 
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService,
     private favouriteService: FavouriteService, private http: HttpClient) { }
 
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
     this.api.getquote(this.quotesId).subscribe(res => {
      this.quotes = res[0];
    });
    
    this.favouriteService.isFavourite(this.quotesId).then(isFav => {
      this.isFavourite = isFav;
    });
  }
 
  favouriteQuote() {
    this.favouriteService.favouriteQuotes(this.quotesId).then(() => {
      this.isFavourite = true;
    });
  }
 
  unfavouriteQuote() {
    this.favouriteService.unfavouriteQuotes(this.quotesId).then(() => {
      this.isFavourite = false;
    });
  }


}
