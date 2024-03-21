import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sudent-info',
  templateUrl: './sudent-info.component.html',
  styleUrls: ['./sudent-info.component.css']
})
export class SudentInfoComponent implements OnInit {
  userdata: any[]=[];
  studentinfo: any[]=[];
  fname: any;
  lname: any;
  Mname: any;
  email: any;
  fees: any;
  phoneNumber: any;
  Gender: any;
  Pincode: any;
  Date: any;
  state: any;
  Address2: any;

  constructor(private fb:FormBuilder,public routes:Router,private apiService: ApiService) { }

  ngOnInit(): void {
    this.displayInformation();
  }

  displayInformation(){
this.apiService.displayinfo().subscribe(
  res=>{
    console.log(res);
    this.studentinfo=res;

  }
)
  }

  // set the attribute to sessionStorage on click
  
  getstudent(FirstName:any,LastName:any,MiddleName:any,Pemail:any,fees:any,Pcontact:any,Gender:any,Pincode:any,Date:any,state:any,Address1:any,RollNo:any){
sessionStorage.setItem('FirstName',FirstName);
sessionStorage.setItem('LastName',LastName);
sessionStorage.setItem('MiddleName',MiddleName);
sessionStorage.setItem('Pemail',Pemail);
sessionStorage.setItem('fees',fees);
sessionStorage.setItem('Pcontact',Pcontact);
sessionStorage.setItem('Gender',Gender);
sessionStorage.setItem('Pincode',Pincode);
sessionStorage.setItem('Date',Date);
sessionStorage.setItem('state',state);
sessionStorage.setItem('Address1',Address1);
sessionStorage.setItem('RollNo',RollNo);
this.routes.navigate(['/dowloadstudentinfo']);
  }
}
