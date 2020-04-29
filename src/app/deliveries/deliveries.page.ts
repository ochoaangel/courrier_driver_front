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

 track_delivery() {
    this.route.navigate(['./deivery-info']);
  }
}
 