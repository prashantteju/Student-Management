import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-result-download',
  templateUrl: './result-download.component.html',
  styleUrls: ['./result-download.component.css']
})
export class ResultDownloadComponent implements OnInit {
  studentresult: any;
  ngOnInit(): void {
    this.display();
  }
  constructor(private fb: FormBuilder, public routes: Router, private apiService: ApiService, private toast: NgToastService) { }
  namesearch:any='';
display(){
  this.apiService.displayresult().subscribe(
    res=>{
console.log(res);
this.studentresult=res;
console.log(this.studentresult);
    }
  )
}

getresult(Fname:any,Lname:any,RollNo:any,Java:any,JavaMarks:any,Python:any,pythonMarks:any,RDBMS:any,RdbmsMarks:any,MachinL:any,MachinMarks:any,Javascrpt:any,JavascriptMarks:any,status:any){
sessionStorage.setItem('Fname',Fname);
sessionStorage.setItem('Lname',Lname);
sessionStorage.setItem('RollNo',RollNo);
sessionStorage.setItem('Java',Java);
sessionStorage.setItem('JavaMarks',JavaMarks);
sessionStorage.setItem('Python',Python);
sessionStorage.setItem('pythonMarks',pythonMarks);
sessionStorage.setItem('RDBMS',RDBMS);
sessionStorage.setItem('RdbmsMarks',RdbmsMarks);
sessionStorage.setItem('MachinL',MachinL);
sessionStorage.setItem('MachinMarks',MachinMarks);
sessionStorage.setItem('Javascrpt',Javascrpt);
sessionStorage.setItem('JavascriptMarks',JavascriptMarks);
sessionStorage.setItem('status',status);
}
}
