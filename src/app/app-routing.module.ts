import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentResultComponent } from './add-student-result/add-student-result.component';
import { AuthguardGuard } from './Authguard/authguard.guard';
import { DowloadstudentinfoComponent } from './dowloadstudentinfo/dowloadstudentinfo.component';
import { FooterComponent } from './footer/footer.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { HeaderComponent } from './header/header.component';
import { MasterComponent } from './master/master.component';
import { MenuComponent } from './menu/menu.component';
import { NewstudentComponent } from './newstudent/newstudent.component';
import { ResultDownloadComponent } from './result-download/result-download.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingupComponent } from './singup/singup.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentResultComponent } from './student-result/student-result.component';
import { SudentInfoComponent } from './sudent-info/sudent-info.component';

const routes: Routes = [
  {path:'singup',component:SingupComponent},
  {path:'sing-in',component:SingInComponent,canActivate:[AuthguardGuard]},
  {path:'newstudent',component:NewstudentComponent,canActivate:[AuthguardGuard]},
  {path:'master',component:MasterComponent,canActivate:[AuthguardGuard]},
  {path:'sudent-info',component:SudentInfoComponent,canActivate:[AuthguardGuard]},
  {path:'dowloadstudentinfo',component:DowloadstudentinfoComponent,canActivate:[AuthguardGuard]},
  {path:'header',component:HeaderComponent,canActivate:[AuthguardGuard]},
  {path:'footer',component:FooterComponent,canActivate:[AuthguardGuard]},
  {path:'menu',component:MenuComponent,canActivate:[AuthguardGuard]},
  {path:'add-student-result',component:AddStudentResultComponent,canActivate:[AuthguardGuard]},
  {path:'result-download',component:ResultDownloadComponent,canActivate:[AuthguardGuard]},
  {path:'student-result',component:StudentResultComponent,canActivate:[AuthguardGuard]},
  {path:'student-login',component:StudentLoginComponent,canActivate:[AuthguardGuard]},
  {path:'front-page',component:FrontPageComponent},

  {path:'',redirectTo:"front-page",pathMatch:'full'}//redirect to front-page page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
