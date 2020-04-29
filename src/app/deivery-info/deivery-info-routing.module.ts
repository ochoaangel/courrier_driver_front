import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeiveryInfoPage } from './deivery-info.page';

const routes: Routes = [
  {
    path: '',
    component: DeiveryInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeiveryInfoPageRoutingModule {}
