import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ReturnStatement } from '@angular/compiler';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css'],
})
export class ProductviewComponent implements OnInit {
  fishDetails = [];
  fishData = [];
  GetfishData = [];
  abc = {};
  constructor(private myservice: MyserviceService, private shareService: SharedService) { }
  ngOnChange() {
    this.abc = this.myservice.getinventorydata();
    console.log(this.abc, 'abc');
  }
  ngOnInit() {
    this.getDetails();
    this.getinventorydata();
  }
  getDetails() {
    this.myservice.getfishDetails().subscribe((res: any) => {
      this.fishDetails = res.data;
      console.log(this.fishDetails, 'sd');
    });
  }
  getinventorydata() {
    this.shareService.Fishdetails.subscribe((res: any) => {
      this.GetfishData = res;
      console.log(res, "mon");
      this.fishDetails.push(this.GetfishData);
      console.log( this.fishDetails,"silla");
    });
  }

}


