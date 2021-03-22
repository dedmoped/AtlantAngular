import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-kepeer',
  templateUrl: './store-kepeer.component.html',
  styleUrls: ['./store-kepeer.component.css']
})
export class StoreKepeerComponent implements OnInit {

  constructor() { }
 displayedColums=['id','fullName','count']
 columnsToDisplay=[...this.displayedColums,"actions"]
  ngOnInit(): void {
  }

}
