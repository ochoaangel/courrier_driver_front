import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeiveryInfoWarehousePage } from './deivery-info-warehouse.page';

const routes: Routes = [
  {
    path: '',
    component: DeiveryInfoWarehousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeiveryInfoWarehousePageRoutingModule {}
