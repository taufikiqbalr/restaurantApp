import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecreationsPageRoutingModule } from './recreations-routing.module';

import { RecreationsPage } from './recreations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecreationsPageRoutingModule
  ],
  declarations: [RecreationsPage]
})
export class RecreationsPageModule {}
