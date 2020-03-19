import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicydetailsPage } from './policydetails.page';

const routes: Routes = [
  {
    path: '',
    component: PolicydetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicydetailsPageRoutingModule {}
