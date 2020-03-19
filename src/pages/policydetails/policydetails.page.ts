import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-policydetails',
  templateUrl: './policydetails.page.html',
  styleUrls: ['./policydetails.page.scss'],
})
export class PolicydetailsPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

}
