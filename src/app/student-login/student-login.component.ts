import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  StudentCredential!: FormGroup;
  Studentdata: any;
  loader1: boolean = false;
  username: any;
  Fname: any;
  Lname: any;
  RollNo: any;
  Java: any;
  JavaMarks: any;
  Python: any;
  pythonMarks: any;
  RDBMS: any;
  RdbmsMarks: any;
  MachinL: any;
  MachinMarks: any;
  Javascrpt: any;
  JavascriptMarks: any;
  status: any;
  Data: any[]=[];
  ngOnInit(): void {

    this.StudentCredential = this.fb.group({
      Usename: ['', Validators.required],
      Rollno: ['', Validators.required]
    })
  }
  constructor(private fb: FormBuilder, public routes: Router, private apiService: ApiService, private http: HttpClient, private router: Router, private toast: NgToastService) { }

  singIn() {
    console.log(this.StudentCredential.value);
    this.apiService.displayresult().subscribe(
      res => {
        // alert(123);
        debugger
        console.log(res)
        this.Studentdata = res.find((a: any) => {
          return a.Fname == this.StudentCredential.value.Usename && a.RollNo == this.StudentCredential.value.Rollno
        });

        console.log(this.Studentdata);
        this.username = this.StudentCredential.value.Usename;
        if (this.Studentdata) {
          debugger
          this.toast.success({ detail: "SUCCESS", summary: 'successfully login' });
          this.StudentCredential.reset();
          this.loader1 = true;
         this.Data.push(this.Studentdata)
          for(let item of this.Data){
            this.Fname=item.Fname;
            this.Lname=item.Lname;
            this.RollNo=item.RollNo;
            this.Java=item.Java;
            this.JavaMarks=item.JavaMarks;
            this.Python=item.Python;
            this.pythonMarks=item.pythonMarks;
            this.RDBMS=item.RDBMS;
            this.RdbmsMarks=item.RdbmsMarks;
            this.MachinL=item.MachinL;
            this.MachinMarks=item.MachinMarks;
            this.Javascrpt=item.Javascrpt;
            this.JavascriptMarks=item.JavascriptMarks;
            this.status=item.status;
  
          }
          // sessionStorage.setItem('Username', this.username);
          sessionStorage.setItem('Fname',this.Fname);
          sessionStorage.setItem('Lname',this.Lname);
          sessionStorage.setItem('RollNo',this.RollNo);
          sessionStorage.setItem('Java',this.Java);
          sessionStorage.setItem('JavaMarks',this.JavaMarks);
          sessionStorage.setItem('Python',this.Python);
          sessionStorage.setItem('pythonMarks',this.pythonMarks);
          sessionStorage.setItem('RDBMS',this.RDBMS);
          sessionStorage.setItem('RdbmsMarks',this.RdbmsMarks);
          sessionStorage.setItem('MachinL',this.MachinL);
          sessionStorage.setItem('MachinMarks',this.MachinMarks);
          sessionStorage.setItem('Javascrpt',this.Javascrpt);
          sessionStorage.setItem('JavascriptMarks',this.JavascriptMarks);
          sessionStorage.setItem('status',this.status);

          setTimeout(() => this.router.navigate(['/student-result']), 1000);
        }
        else {
          this.toast.error({ detail: "warnig massage", summary: 'login is failed....!', duration: 1000 });
        }

      })

  }
}
