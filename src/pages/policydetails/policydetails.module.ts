import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicydetailsPageRoutingModule } from './policydetails-routing.module';

import { PolicydetailsPage } from './policydetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicydetailsPageRoutingModule
  ],
  declarations: [PolicydetailsPage]
})
export class PolicydetailsPageModule {}
