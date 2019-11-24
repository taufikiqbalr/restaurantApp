import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicRatingModule } from "ionic4-rating";

import { HotelsPageRoutingModule } from './hotels-routing.module';

import { HotelsPage } from './hotels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    HotelsPageRoutingModule
  ],
  declarations: [HotelsPage]
})
export class HotelsPageModule {}
