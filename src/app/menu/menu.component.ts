import { OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any = MatSidenav;
  isExpanded = true;
  isShowing: boolean = false;
  studentinfo: any;
  studentcount: any;
  Fees: any[] = [];
  Fees1: any;
  userdata: any;
  Studentlogin: any;
  role:any;
  isRole: boolean=false;
  isImg: boolean=true;
  ngOnInit(): void {
    // sessionStorage.getItem('tokan');
    this.role=sessionStorage.getItem('UserRole');
    if(this.role=='Admin')
    { 
      // alert(123)
      this.isRole=true;
    }
    else{
      this.isRole=false;
    }
    this.displayInformation();
    this.displayuser();
  }
  constructor(private fb: FormBuilder, public routes: Router, private apiService: ApiService) { }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  displayInformation() {
    this.apiService.displayinfo().subscribe(
      res => {
        console.log(res);
        this.studentinfo = res;
        this.studentcount = this.studentinfo.length;
        for (let a of this.studentinfo) {
          this.Fees.push(a.Fees);
        }
        this.Fees1 = this.Fees.length
        console.log(this.Fees.length);
      }
    )
  }

  public displayuser() {
    this.apiService.getdata().subscribe(
      res => {
        console.log(res);
        this.userdata = res;
        console.log(this.userdata)
        this.Studentlogin = this.userdata.length
      }
    )
  }

  doSomething(e:MouseEvent){
    e.preventDefault();
    console.log(e);

  }


  logout(even:any){
console.log(even);
sessionStorage.removeItem('tokan');

  }
}