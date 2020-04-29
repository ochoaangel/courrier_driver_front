import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deivery-info',
  templateUrl: './deivery-info.page.html',
  styleUrls: ['./deivery-info.page.scss'],
})
export class DeiveryInfoPage implements OnInit {
 fabAction = false;
  constructor() { }

  ngOnInit() {
  }
	
 toggleFab(){
    this.fabAction = !this.fabAction;
   }

}
