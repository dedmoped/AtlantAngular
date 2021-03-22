import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Details } from 'src/app/Models/Detail';
import { StoreKepeer } from 'src/app/Models/StoreKepeer';
import { DataServiceService } from 'src/app/services/data-service.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() displayedColumns:string[];
  @Input()  columnsToDisplay:string[];
  dataTable:any;
  kepeers:any;
  showForm :boolean=false;
  showButton:boolean=true;
  Date:string="23-01-2012";
  constructor(private data:DataServiceService,public dialog: MatDialog) { }
  ngOnInit(): void {
  this.data.getDetailsList().subscribe(res=>this.dataTable=res,err=>{alert("error")});
  }
  addRow(){
    this.showForm=false;
    this.showButton=true;
  }
  onChanged(data:any){ 
    this.data.addDetail(data).subscribe(res=>
      {
        data.dateCreated= formatDate(data.dateCreated,"yy-MM-dd","en")
        this.data.getDetailsList().subscribe(res=>this.dataTable=res)
        this.dataTable=[...this.dataTable]
      },err=>
      {
        console.log("err");
      })
  }
  delete(detail: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.data.deleteDetail(detail).subscribe((res)=>{
          this.data.getDetailsList().subscribe(res=>this.dataTable=res)
          this.dataTable=[...this.dataTable]
        },err=>{
          console.log("err delete")
        })
      }
    });
  }

}
