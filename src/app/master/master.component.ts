import { OnChanges, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit,OnChanges {
  @ViewChild(MenuComponent) menu: MenuComponent | undefined;
  public isClassMenu: boolean = false;
  ishide: boolean = false;
  public isHomeMenu: boolean = false;
  constructor(private router: Router) { }

  ngOnChanges(): void {

    let currentRoute = this.router;
    let currentUrl = currentRoute.url;
    this.ishide = ['/learntest'].findIndex(str => currentUrl.includes(str)) == 0;


  }
  onActivate() {
    let currentRoute = this.router;
    let currentUrl = currentRoute.url;
    this.ishide = ['/learntest'].findIndex(str => currentUrl.includes(str)) == 0;

  }

  ngOnInit(): void {
    let currentRoute = this.router;
    let currentUrl = currentRoute.url;
    this.ishide = ['/learntest'].findIndex(str => currentUrl.includes(str)) == 0;

  }
}
