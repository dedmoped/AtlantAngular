import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Details } from 'src/app/Models/Detail';
import { StoreKepeer } from 'src/app/Models/StoreKepeer';
import { DataServiceService } from 'src/app/services/data-service.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-store-kepeertable',
  templateUrl: './store-kepeertable.component.html',
  styleUrls: ['./store-kepeertable.component.css']
})
export class StoreKepeertableComponent implements OnInit {

  @Input() displayedColumns:string[];
  @Input() columnsToDisplay:string[];
  dataTable:any;
  showForm :boolean=false;
  showButton:boolean=true;
  Date:string="23-01-2012";
  constructor(private data:DataServiceService, public dialog: MatDialog) { }
  ngOnInit(): void {
  this.data.getStoreKepeerList().subscribe(res=>this.dataTable=res,err=>{alert("error")});
  }
  addRow(){
    this.showForm=false;
    this.showButton=true;
  }
  onChanged(data:string){ 
    this.data.addStoreKepeer(data).subscribe(res=>
      {
       this.data.getStoreKepeerList().subscribe(res=>this.dataTable=res)
        this.dataTable=[...this.dataTable]
      },err=>
      {
        console.log(err);
      })
  }
  delete(kepeer: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.data.deleteStoreKepeer(kepeer).subscribe((res)=>{
          this.dataTable.splice(this.dataTable.indexOf(kepeer),1);
          this.dataTable=[...this.dataTable]
        },err=>{
          console.log("err delete")
        })
      }
    });
  }
}
