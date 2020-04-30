import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { DeiveryInfoStoragePageRoutingModule } from './deivery-info-storage-routing.module';

import { DeiveryInfoStoragePage } from './deivery-info-storage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DeiveryInfoStoragePageRoutingModule
  ],
  declarations: [DeiveryInfoStoragePage]
})
export class DeiveryInfoStoragePageModule {}
