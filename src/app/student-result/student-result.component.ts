import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas'; 
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit {
  sub1:any;
  Python: any;
  pythonMarks: any;
  Javascrpt: any;
  JavascriptMarks: any;
  MachinL: any;
  MachinMarks: any;
  Java: any;
  JavaMarks: any;
  RDBMS: any;
  RdbmsMarks: any;
  status: any;
  Total: any;
  RollNo: any;
  Fname: any;
  Lname: any;
  ngOnInit(): void {

    this.Python=sessionStorage.getItem('Python');
    this.pythonMarks=sessionStorage.getItem('pythonMarks');
    this.Javascrpt=sessionStorage.getItem('Javascrpt');
    this.JavascriptMarks=sessionStorage.getItem('JavascriptMarks');
    this.MachinL=sessionStorage.getItem('MachinL');
    this.MachinMarks=sessionStorage.getItem('MachinMarks');
    this.Java=sessionStorage.getItem('Java');
    this.JavaMarks=sessionStorage.getItem('JavaMarks');
    this.RDBMS=sessionStorage.getItem('RDBMS');
    this.RdbmsMarks=sessionStorage.getItem('RdbmsMarks');
    this.status=sessionStorage.getItem('status');
    this.RollNo=sessionStorage.getItem('RollNo');
    this.Fname=sessionStorage.getItem('Fname');
    this.Lname=sessionStorage.getItem('Lname')
  this.Total=this.pythonMarks + this.JavascriptMarks + this.MachinMarks + this.JavaMarks + this.RdbmsMarks;
  console.log(this.Total);
    
  }
  constructor(private fb: FormBuilder, public routes: Router, private apiService: ApiService) { }

 
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
    pdf.save("result.pdf");
  });
}
}




