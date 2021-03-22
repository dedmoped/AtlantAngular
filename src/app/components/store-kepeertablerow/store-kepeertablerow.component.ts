import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StoreKepeer } from 'src/app/Models/StoreKepeer';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-store-kepeertablerow',
  templateUrl: './store-kepeertablerow.component.html',
  styleUrls: ['./store-kepeertablerow.component.css']
})
export class StoreKepeertablerowComponent implements OnInit {

  kepeers:StoreKepeer[]=[];
  fullname:string;
  checkName:boolean=false;
  showForm :boolean=false;
  showButton:boolean=true;
  constructor(private ds:DataServiceService) { }
  @Output() onChanged = new EventEmitter<any>();
  ngOnInit(): void {
    this.ds.getAllStoreKepeers().subscribe(res=>this.kepeers=res,err=>{console.log("err")});
  }
  show(){
    this.showForm=true;
    this.showButton=false;
  }
  add(){
    if(this.kepeers.some(x=>x.fullName==this.fullname)){
      this.checkName=true;
    }
    else{
     this.checkName=false;
     this.onChanged.emit(this.fullname);
     this.showForm=false;
     this.showButton=true;
    }
   
  }
}
