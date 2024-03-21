import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  url:string="http://localhost:3000/getvalue";
  // url2:string="http://localhost:3000/student/";
  headers = new HttpHeaders().set('Content-Type', 'aplication/json').set('Accept', 'aplication/json');
  httpOptions = {
    headers: this.headers
  }

  constructor(private http:HttpClient) { }
  // display user data
  getdata(){
    return this.http.get<any>("http://localhost:3000/getvalue")
  }
  // insert data into user data
 setdata(requestbody:any){
  return this.http.post<any>("http://localhost:3000/getvalue",requestbody)
 }


 loginUser(){
return this.http.get<any>("http://localhost:3000/getvalue")
 }
 createuser(requestbody2:any){
  return this.http.post<any>("http://localhost:3000/student",requestbody2)
 }


 displayinfo(){
  return this.http.get<any>("http://localhost:3000/student")
 }

 UserUpdate(Id:any,requestbody:any){
return this.http.put(`${this.url}/${Id}`,requestbody)
 }


 deleteuser(id:any){
  const url=`${this.url}/${id}`;
  return this.http.delete<any>(url,this.httpOptions);
}

createResult(requestbody:any){
return this.http.post<any>("http://localhost:3000/AddResult",requestbody);
}

displayresult(){
  return this.http.get<any>("http://localhost:3000/AddResult");
}
}
