import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.page.html',
  styleUrls: ['./deliveries.page.scss'],
})
export class DeliveriesPage implements OnInit {
 tab: string = "new_deliveryes";
  constructor(private route: Router) { }

  ngOnInit() {
  }

 track_deliveryDom() {
    this.route.navigate(['./deivery-info']);
  }

  track_deliveryWare() {
    this.route.navigate(['./deivery-info-warehouse']);
  }

  track_deliveryStor() {
    this.route.navigate(['./deivery-info-storage']);
  }
}
 