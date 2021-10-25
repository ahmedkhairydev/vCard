import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VCardRoutingModule } from './v-card-routing.module';
import { VCardComponent } from './pages/v-card/v-card.component';
import { SaveToGooglePayButtonModule } from '@google-pay/save-button-angular';


@NgModule({
  declarations: [
    VCardComponent
  ],
  imports: [
    CommonModule,
    VCardRoutingModule,
    SaveToGooglePayButtonModule
  ]
})
export class VCardModule { }
