import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { DeiveryInfoWarehousePageRoutingModule } from './deivery-info-warehouse-routing.module';

import { DeiveryInfoWarehousePage } from './deivery-info-warehouse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DeiveryInfoWarehousePageRoutingModule
  ],
  declarations: [DeiveryInfoWarehousePage]
})
export class DeiveryInfoWarehousePageModule {}
