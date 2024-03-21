import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  ngOnInit(): void {
    // sessionStorage.setItem('tokan',"A@#$hGG");
  }
  ischerman: boolean = false;
  istrustee: boolean = false;
  isEdr: boolean = false;
  isdrc: boolean = false;

  isCsc: boolean = false;
  isMca: boolean = false;
  isMech: boolean = false;
  iscivil: boolean = false;
  isTPO: boolean = false;
  isPlacement: boolean = false;
  isCompany: boolean = false;
  isHome: boolean=true;

  about() {
    this.ischerman = false;
    this.istrustee = false;
    this.isEdr = false;
    this.isdrc = false;
    this.isHome=false;
  }

  department() {
    this.isCsc = false;
    this.isMca = false;
    this.isMech = false;
    this.iscivil = false;
    this.isHome=false;
    
    
  }


  Home(event:any){
    console.log(event);
    this.isHome=true;
    // this.department();
    // this.about();
    // this.placement();
  }
// about  /
  cheirman(event: any) {
    console.log(event);
    this.ischerman = true;
    this.isdrc = false;
    this.istrustee = false;
    this.isEdr = false;
    this.department()
  }
  Trustee(event: any) {
    console.log(event)
    this.ischerman = false;
    this.istrustee = true;
    this.isdrc = false;
    this.isEdr = false;
    this.department();
  }
  E_Director(event: any) {
    console.log(event);
    this.isEdr = true;
    this.isdrc = false;
    this.istrustee = false;
    this.ischerman = false;
    this.department();
  }
  Director(event: any) {
    console.log(event);
    this.isdrc = true;
    this.istrustee = false;
    this.ischerman = false;
    this.isEdr = false;
    this.department();
  }

  // department

  dapartment() {
    this.isCsc = false;
    this.isMca = false;
    this.isMech = false;
    this.iscivil = false;
    this.isHome=false;
  }

  Dcsc(event: any) {
    this.isCsc = true;
    this.isMca = false;
    this.isMech = false;
    this.iscivil = false;
    this.about();
    this.placement();
  }
  MCA(event: any) {
    this.isMca = true;
    this.isCsc = false;
    this.iscivil = false;
    this.isMech = false;
    this.about();
    this.placement();
  }
  Mech(event: any) {
    this.isMech = true;
    this.isCsc = false;
    this.isMca = false;
    this.iscivil = false;
    this.about();
    this.placement();
  }
  civil(event: any) {
    this.iscivil = true;
    this.isCsc = false;
    this.isMca = false;
    this.isMech = false;
    this.about();
    this.placement();
  }


  // placement and Training
  placement() {
    this.isTPO = false;
    this.isPlacement = false;
    this.isCompany = false;
    

  }
  TPO(event: any) {
    this.isTPO = true;
    this.isPlacement = false;
    this.isCompany = false
    this.about();
    this.dapartment();
  }
  PlacedStudent(event: any) {
    this.isTPO = false;
    this.isPlacement = true;
    this.isCompany = false
    this.about();
    this.dapartment();
  }
  Companies(event: any) {
    this.isTPO = false;
    this.isPlacement = false;
    this.isCompany = true;
    this.about();
    this.dapartment();
  }
}
