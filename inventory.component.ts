import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventoryForm = new FormGroup({
    fishname: new FormControl(''),
    fishprice: new FormControl(''),
    fishstatus: new FormControl(''),
    fishdescription: new FormControl(''),
    fishimage: new FormControl(''),
  });
  fishDetails = [];
  editDetails = [];
  //  fishDetails: Array<{fishname: string, fishprice: number, fishstatus: string,
  //    fishdescription: string, fishimage: string}> = [];
  constructor(private myservice: MyserviceService, private shareService: SharedService) { }
  ngOnInit() {
    this.getDetails();
  }
  addItem() {
    // console.log(this.fishname, this.fishprice, this.fishstatus, this.fishdescription, this.fishimage );
    // this.fishDetails.push({ fishname: this.fishname, fishprice: this.empoloyeeID });
  }
  onSubmit() {
    console.log(this.inventoryForm.value);

  }
  getDetails() {
    this.myservice.getfishDetails().subscribe((res: any) => {
      this.fishDetails = res.data;
    });
  }
  // EditDetails(id) {
  //   console.log(id);
  //   this.myservice.setinventorydata(id);
  // }
  setFishDetails(id) {
    this.shareService.setData(id);
    
  }
}
