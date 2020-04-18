import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersDetailsPage } from './character-details.page';

const routes: Routes = [
  {
    path: '',
    component: CharactersDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterDetailsPageRoutingModule {}
