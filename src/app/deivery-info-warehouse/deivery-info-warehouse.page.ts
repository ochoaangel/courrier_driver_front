import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deivery-info-warehouse',
  templateUrl: './deivery-info-warehouse.page.html',
  styleUrls: ['./deivery-info-warehouse.page.scss'],
})
export class DeiveryInfoWarehousePage implements OnInit {
  fabAction = false;
  constructor() { }

  ngOnInit() {
  }
	
 toggleFab(){
    this.fabAction = !this.fabAction;
   }

}
