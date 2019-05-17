import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NearMePage } from './near-me.page';
import { IonicRatingModule } from 'ionic4-rating';
const routes: Routes = [
  {
    path: '',
    component: NearMePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NearMePage]
})
export class NearMePageModule {}
