import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Details } from '../Models/Detail';
import { formatDate } from '@angular/common';
import { StoreKepeer } from '../Models/StoreKepeer';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  deleteStoreKepeer(kepeer:StoreKepeer) {
    let body={
      "FullName":kepeer.fullName,
      "Id":kepeer.id
    };
   return this.http.request("delete",environment.apiUrl+"/StoreKepeer",{body:body})
  }
  deleteDetail(detail:Details){
   return this.http.request("delete",environment.apiUrl+"/Details/"+detail.id)
  }

  apiUrl=''
  constructor(private http:HttpClient) { }

  getDetailsList():Observable<Details>{
    return this.http.get<Details>(environment.apiUrl+"/details")
  }
  getStoreKepeerList():Observable<any>{

    return this.http.get(environment.apiUrl+"/storeKeepersDetals")
  }
  getAllStoreKepeers():Observable<StoreKepeer[]>
  {
    return this.http.get<StoreKepeer[]>(environment.apiUrl+"/storeKeepers")
  }

  addStoreKepeer(kepeer:string){
     return this.http.post(environment.apiUrl+"/StoreKeeper",{"FullName":kepeer})
  }

  addDetail(Detail:Details){
    let formdata= new FormData();
    console.log(Detail);
    formdata.append("detailinfo",JSON.stringify(Detail));
    return this.http.post(environment.apiUrl+"/Details",formdata)
  }
  
}
