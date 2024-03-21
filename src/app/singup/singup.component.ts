import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';
import { Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  userdata: any;
  uservalue: any;
  loader1:boolean=false;
  loader2:boolean=false;
  username: any;
  UserRole: any;

  constructor(private fb: FormBuilder, public routes: Router, private apiService: ApiService, private http: HttpClient, private router: Router, private toast: NgToastService) { }
  createuser!: FormGroup
  login!: FormGroup
  ngOnInit(): void {
    // this.displaydata();
    // sessionStorage.getItem('tokan');
    this.createuser = this.fb.group({
      Username: [''],
      Password: [''],
      Repassword: [''],
      Email: [''],
      UserRole:['',Validators.required]

    })

    this.login = this.fb.group({
      username: ['',],
      password: ['',],
      UserRole1:['',Validators.required]
    })
  }
  singup() {
    console.log(this.createuser.value);
    // this.routes.navigate(['/sing-in']);  
    let requestbody: Object = {
      "Username": this.createuser.value.Username,
      "Password": this.createuser.value.Password,
      "Repassword": this.createuser.value.Repassword,
      "Email": this.createuser.value.Email,
      "UserRole":this.createuser.value.UserRole,
    }
    console.log(requestbody);
    if (this.createuser.value.Password == this.createuser.value.Repassword) {
      this.apiService.setdata(requestbody).subscribe(
        d => {
          this.toast.success({ detail: "SUCCESSFULLy", summary: 'User Create successfully',duration:1000 });
          // alert(123);
          // this.loader2=true;
          this.createuser.reset()
          console.log(d);
        },
        error => {
          console.log(error);
        }
      )
    }
    if(this.createuser.value.Password !== this.createuser.value.Repassword){
      this.toast.error({ detail: "warnig", summary: 'Password is Incorrect?', duration: 1000 });
      
      alert("password is not match");
      this.createuser.reset()
    }
  }


  public singIn() {
    this.UserRole=this.login.value.UserRole1;

    this.apiService.getdata().subscribe(
      res => {
        // debugger
        console.log(res)
        this.userdata = res.find((v: any) => {
          return v.Username == this.login.value.username && v.Password == this.login.value.password && v.UserRole == this.login.value.UserRole1
        });
        
        console.log(this.userdata)
        if (this.userdata) {
          debugger
          this.toast.success({ detail: "SUCCESS", summary: 'successfully login' });
          // alert("login successfully");
          this.login.reset();
          this.loader1=true;
          // sessionStorage.setItem('Username',this.username);
          // sessionStorage.setItem('Password',password);
          sessionStorage.setItem('tokan',"sfsfdsdfsfds");
          sessionStorage.setItem('UserRole',this.UserRole);
          setTimeout(() => this.router.navigate(['/menu']), 1000);
          // this.router.navigate(['/sing-in']);
        }
        else {
          this.toast.error({ detail: "warnig massage", summary: 'login is failed....!',duration:1000});
          // alert("does not login");
        }
      }

    )

  }

}



