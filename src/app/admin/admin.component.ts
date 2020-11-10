import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
  <div class="list-group">
    <a routerLink="/search" class="list-group-item list-group-item-action">Search</a>
    <a routerLink="/battle" class="list-group-item list-group-item-action">Battle</a>
  </div>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
