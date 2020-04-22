import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { EpisodesPage } from './pages/episodes/episodes.page';
import { EpisodeDetailsPage } from './pages/episode-details/episode-details.page';
import { CharactersPage } from './pages/characters/characters.page';
import { CharactersDetailsPage } from './pages/character-details/character-details.page';
import { QuotesPage } from './pages/quotes/quotes.page';
import { QuoteDetailsPage } from './pages/quote-details/quote-details.page';
import { DeathsPage } from './pages/deaths/deaths.page';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
