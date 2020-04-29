import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { DeiveryInfoPageRoutingModule } from './deivery-info-routing.module';

import { DeiveryInfoPage } from './deivery-info.page';

@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,    
    DeiveryInfoPageRoutingModule
  ],
  declarations: [DeiveryInfoPage]
})
export class DeiveryInfoPageModule {}
