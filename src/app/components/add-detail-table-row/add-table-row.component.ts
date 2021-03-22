import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Details } from 'src/app/Models/Detail';
import {formatDate} from '@angular/common';
import { StoreKepeer } from 'src/app/Models/StoreKepeer';
import { DataServiceService } from 'src/app/services/data-service.service';


@Component({
  selector: 'app-add-table-row',
  templateUrl: './add-table-row.component.html',
  styleUrls: ['./add-table-row.component.css']
})
export class AddTableRowComponent implements OnInit {

  kepeers:StoreKepeer[]=[];
  myDate:Date;
  date:string;
  constructor(private ds:DataServiceService){
  }
  @Output() onChanged = new EventEmitter<any>();
  showForm :boolean=false;
  showButton:boolean=true;
  ngOnInit(): void {
    this.ds.getAllStoreKepeers().subscribe(res=>this.kepeers=res,err=>{console.log("err")});
  }
  details:Details = new Details();
  show(){
    this.showForm=true;
    this.showButton=false;
  }
  add(){
    this.showForm=false;
    this.showButton=true;
     this.onChanged.emit(this.details);
     this.details= new Details();
  }
}
