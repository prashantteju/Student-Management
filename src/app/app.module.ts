import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingupComponent } from './singup/singup.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { NewstudentComponent } from './newstudent/newstudent.component';
import { MasterComponent } from './master/master.component';
import { SudentInfoComponent } from './sudent-info/sudent-info.component';
import { DowloadstudentinfoComponent } from './dowloadstudentinfo/dowloadstudentinfo.component';
import { HeaderComponent } from './header/header.component'
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MenuComponent } from './menu/menu.component';
import {MatListModule} from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import { AddStudentResultComponent } from './add-student-result/add-student-result.component';
import { ResultDownloadComponent } from './result-download/result-download.component';
import { StudentResultComponent } from './student-result/student-result.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { StudentLoginComponent } from './student-login/student-login.component';
import { FrontPageComponent } from './front-page/front-page.component';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    SingInComponent,
    NewstudentComponent,
    MasterComponent,
    SudentInfoComponent,
    DowloadstudentinfoComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    AddStudentResultComponent,
    ResultDownloadComponent,
    StudentResultComponent,
    StudentLoginComponent,
    FrontPageComponent,
    // ToastrModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    NgSelectModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
