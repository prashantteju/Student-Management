import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  userdata: any[] = [];
  isEditvalue: boolean = false;
  Username1: any;
  Password1: any;
  Repassword1: any;
  Email1: any;
  Id: any;

  constructor(private fb: FormBuilder, public routes: Router, private apiService: ApiService, private http: HttpClient, private toast: NgToastService) { }
  studentUser!: FormGroup;
  ngOnInit(): void {
    
    this.displayuser();
    this.studentUser = this.fb.group({
      Username: ["", Validators.required],
      Password: ["", Validators.required],
      Repassword: ["", Validators.required],
      Email: ["", Validators.required],
    })

  }


  public displayuser() {
    this.apiService.getdata().subscribe(
      res => {
        console.log(res);
        this.userdata = res;
        console.log(this.userdata)
      }
    )
  }

  remodata(id: any) {
    if (confirm('are you sure to delete the record??')) {
      this.apiService.deleteuser(id).subscribe(data => {
        console.log(data)
        this.toast.success({ detail: "SUCCESSFULLy", summary: 'Record delete successfully', duration: 1000 });
      })
    }
    else {
      this.displayuser();
    }

  }

  Update() {

    let requestbody: object = {
      "id": this.Id,
      "Username": this.studentUser.value.Username,
      "Password": this.studentUser.value.Password,
      "Repassword": this.studentUser.value.Repassword,
      "Email": this.studentUser.value.Email,
    }
    console.log(requestbody);
    this.apiService.UserUpdate(this.Id, requestbody).subscribe(res => {
      // alert(123);
      this.toast.success({ detail: "SUCCESSFULLy", summary: 'Record Updated successfully', duration: 1000 });
      console.log(res);
    })
  }

  clear() {
    this.studentUser.reset();
  }

  isEdit(i: number, name: any, Id: any) {
    console.log(i);
    console.log(name);
    console.log(Id);
    this.Id = Id;
    this.isEditvalue = true;

    this.Username1 = this.userdata[i].Username;
    this.Password1 = this.userdata[i].Password;
    this.Repassword1 = this.userdata[i].Repassword;
    this.Email1 = this.userdata[i].Email;
  }

  //   generatePdf(data: HTMLElement) {
  //     html2canvas(data, { allowTaint: true }).then(canvas => {
  //      let HTML_Width = canvas.width;
  //      let HTML_Height = canvas.height;
  //      let top_left_margin = 15;
  //      let PDF_Width = HTML_Width + (top_left_margin * 2);
  //      let PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
  //      let canvas_image_width = HTML_Width;
  //      let canvas_image_height = HTML_Height;
  //      let totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
  //      canvas.getContext('2d');
  //      let imgData = canvas.toDataURL("image/jpeg", 1.0);
  //      let pdf = new jspdf.jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
  //      pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
  //      for (let i = 1; i <= totalPDFPages; i++) {
  //        pdf.addPage([PDF_Width, PDF_Height], 'p');
  //        pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
  //      }
  //       pdf.save("prashant.pdf");
  //    });
  //  }
}
