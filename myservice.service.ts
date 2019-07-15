import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject } from 'rxjs';


export interface Inventory {
  fishName: string;
  fishPrice: number;
  fishStatus: string;
  fishDesc: string;
  fishImg: string;
}
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  fishData: string;

  // inventory: Inventory[] = [];
  // private edit = new BehaviorSubject(data);
  // public Details = this.edit.asObservable();
  constructor(private http: HttpClient) {
  }
  setinventorydata(data) {
    this.fishData = JSON.stringify(data);
    console.log(this.fishData, 'qweqw');

  }
  getinventorydata() {
    console.log(this.fishData, 'asd');
    return this.fishData;
  }

  getfishDetails() {
    return this.http.get('../assets/json/fishdetails.json');
  }



}
