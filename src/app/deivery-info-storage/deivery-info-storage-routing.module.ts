import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeiveryInfoStoragePage } from './deivery-info-storage.page';

const routes: Routes = [
  {
    path: '',
    component: DeiveryInfoStoragePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeiveryInfoStoragePageRoutingModule {}
