import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.css']
})
export class NewstudentComponent implements OnInit {
contactmethod=[{Id:1,Name:'mobile'},{Id:2,Name:'Email'},{Id:3,Name:'Text'}];
  selectElement: any;
  output: any;
  output2: any;
  selectElement2: any;
  constructor(private fb: FormBuilder, public routes: Router, private apiService: ApiService, private http: HttpClient, private router: Router, private toast: NgToastService,private config: NgSelectConfig) { }
  newstudent!: FormGroup;
  ngOnInit(): void {

    this.newstudent = this.fb.group({
      FirstName: ['',Validators.required],
      LastName: ['',Validators.required],
      MiddleName: ['',Validators.required],
      Gender: ['',Validators.required],
      Date: [''],
      RollNo:['',Validators.required],
      Address1:[''],
      Address2:[''],
      city:[''],
      state:[''],
      Pincode:[''],
      Pname:[''],
      Plname:[''],
      Pmidname:[''],
      Pcontactmethod:[''],
      Pcontact:[''],
      Pemail:[''],
      emerg_Fname:[''],
      emerg_Lname:[''],
      emerg_Mname:[''],
      emerg_contmethod:[''],
      emerg_contact:[''],

      Fees: ['',Validators.required],

    })
  }
  createuser() {
    debugger
    console.log(this.newstudent.value);
    let requestbody2: object = {

      "FirstName":this.newstudent.value.FirstName,
      "LastName":this.newstudent.value.LastName,
      "MiddleName":this.newstudent.value.MiddleName,
      "Gender":this.output2,
      "Date":this.newstudent.value.Date,
      "Address1":this.newstudent.value.Address1,
      "Address2":this.newstudent.value.Address2,
      "city":this.newstudent.value.city,
      "state":this.newstudent.value.state,
      "Pincode":this.newstudent.value.Pincode,
      "Pname":this.newstudent.value.Pname,
      "Plname":this.newstudent.value.Plname,
      "Pmidname":this.newstudent.value.Pmidname,
      "Pcontactmethod":this.output,
      "Pcontact":this.newstudent.value.Pcontact,
      "Pemail":this.newstudent.value.Pemail,
      "emerg_Fname":this.newstudent.value.emerg_Fname,
      "emerg_Lname":this.newstudent.value.emerg_Lname,
      "emerg_Mname":this.newstudent.value.emerg_Mname,
      "emerg_contmethod":this.output,
      "emerg_contact":this.newstudent.value.emerg_contact,
      "Fees":this.newstudent.value.Fees,
      "RollNo":this.newstudent.value.RollNo
    }
    console.log(requestbody2);
    if(this.newstudent.invalid){
      this.toast.error({detail:"user error",summary:" All field are needed..!!",duration:2000})
    }
    else{
    this.apiService.createuser(requestbody2).subscribe(
      d=>{
        this.toast.success({detail:"user create",summary:"successfully added student Information",duration:2000})
        console.log(d)
      }
    )
    }
  }

  onselect(event:any){
    this.selectElement = document.querySelector('#select1');
       this.output = this.selectElement.options[this.selectElement.selectedIndex].value;
       console.log(this.output)
        // document.querySelector('.output').textContent = this.output;
console.log(event)
  }
  gender(event:any){
    console.log(event)
    this.selectElement2 = document.querySelector('#select2');
    this.output2 = this.selectElement2.options[this.selectElement2.selectedIndex].value;
    console.log(this.output2)
}
cancel(){
  this.newstudent.reset();
}
}
