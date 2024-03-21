import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { NgToastService } from 'ng-angular-popup';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student-result',
  templateUrl: './add-student-result.component.html',
  styleUrls: ['./add-student-result.component.css']
})
export class AddStudentResultComponent implements OnInit {

  constructor(private fb: FormBuilder, public routes: Router, private apiService: ApiService, private toast: NgToastService) { }
  studentResult!: FormGroup;
  ngOnInit(): void {
    this.studentResult = this.fb.group({
      Fname: ['', Validators.required],
      Lname: ['', Validators.required],
      Java: ['', Validators.required],
      JavaMarks: ['', Validators.required],
      Python: ['', Validators.required],
      pythonMarks: ['', Validators.required],
      RDBMS: ['', Validators.required],
      RdbmsMarks: ['', Validators.required],
      MachinL: ['', Validators.required],
      MachinMarks: ['', Validators.required],
      Javascrpt: ['', Validators.required],
      JavascriptMarks: ['', Validators.required],
      status: ['', Validators.required],
      RollNo: ['', Validators.required],
    })

  }

  Add() {
    let requestbody:object={
      'Fname': this.studentResult.value.Fname,
      'Lname': this.studentResult.value.Lname,
      'Java': this.studentResult.value.Java,
      'JavaMarks': this.studentResult.value.JavaMarks,
      'Python': this.studentResult.value.Python,
      'pythonMarks': this.studentResult.value.pythonMarks,
      'RDBMS': this.studentResult.value.RDBMS,
      'RdbmsMarks': this.studentResult.value.RdbmsMarks,
      'MachinL': this.studentResult.value.MachinL,
      'MachinMarks': this.studentResult.value.MachinMarks,
      'Javascrpt': this.studentResult.value.Javascrpt,
      'JavascriptMarks': this.studentResult.value.JavascriptMarks,
      'status': this.studentResult.value.status,
      'RollNo': this.studentResult.value.RollNo,
    }
    console.log(requestbody);
    if(this.studentResult.invalid){
      this.toast.error({detail:"user error",summary:" All field are needed..!!",duration:2000})
    }
    else{
    this.apiService.createResult(requestbody).subscribe(
      d=>{ 
        this.toast.success({detail:"user create",summary:"successfully added student Information",duration:2000})
        console.log(d)
        this.studentResult.reset();
      }
    )
    }
    // this.toast.success({ detail: "user create", summary: "successfully added student Information", duration: 2000 })
  }
  addv(event: any) {
    console.log(event);
    // this.toast.success({ detail: "user create", summary: "successfully added student Information", duration: 2000 })
  }

  Next(){

  }
  next(event:any){
console.log(event);
  }
}
