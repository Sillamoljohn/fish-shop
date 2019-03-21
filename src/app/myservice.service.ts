import { Injectable } from '@angular/core';

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
  inventory: Inventory[] = [];
  constructor() {


  }


}
