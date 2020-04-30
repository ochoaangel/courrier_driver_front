import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deivery-info-storage',
  templateUrl: './deivery-info-storage.page.html',
  styleUrls: ['./deivery-info-storage.page.scss'],
})
export class DeiveryInfoStoragePage implements OnInit {
  fabAction = false;
  constructor() { }

  ngOnInit() {
  }
	
 toggleFab(){
    this.fabAction = !this.fabAction;
   }
}
