import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dowloadstudentinfo',
  templateUrl: './dowloadstudentinfo.component.html',
  styleUrls: ['./dowloadstudentinfo.component.css']
})
export class DowloadstudentinfoComponent implements OnInit {
  ngOnInit(): void {
    this.fname = sessionStorage.getItem('FirstName');
    this.lname = sessionStorage.getItem('MiddleName');
    this.Mname = sessionStorage.getItem('LastName');
    this.email = sessionStorage.getItem('Pemail');
    this.fees = sessionStorage.getItem('fees');
    this.PhoneNumber = sessionStorage.getItem('Pcontact');
    this.Gender = sessionStorage.getItem('Gender');
    this.Pincode = sessionStorage.getItem('Pincode');
    this.Date = sessionStorage.getItem('Date');
    this.state = sessionStorage.getItem('state');
    this.Address2 = sessionStorage.getItem('Address1');
  }

  constructor(private fb: FormBuilder, public routes: Router, private apiService: ApiService) { }
  fname: any;
  lname: any;
  Mname: any;
  email: any;
  fees: any;
  PhoneNumber: any;
  Gender: any;
  Pincode: any;
  Date: any;
  state: any;
  Address2: any;


  generatePdf(data: HTMLElement) {
    html2canvas(data, { allowTaint: true }).then(canvas => {
      let HTML_Width = canvas.width;
      let HTML_Height = canvas.height;
      let top_left_margin = 15;
      let PDF_Width = HTML_Width + (top_left_margin * 2);
      let PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
      let canvas_image_width = HTML_Width;
      let canvas_image_height = HTML_Height;
      let totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
      canvas.getContext('2d');
      let imgData = canvas.toDataURL("image/jpeg", 1.0);
      let pdf = new jspdf.jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
      pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
      for (let i = 1; i <= totalPDFPages; i++) {
        pdf.addPage([PDF_Width, PDF_Height], 'p');
        pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
      }
      pdf.save(this.fname + ".pdf");
    });
  }
}
