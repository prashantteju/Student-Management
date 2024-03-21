import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowloadstudentinfoComponent } from './dowloadstudentinfo.component';

describe('DowloadstudentinfoComponent', () => {
  let component: DowloadstudentinfoComponent;
  let fixture: ComponentFixture<DowloadstudentinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DowloadstudentinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DowloadstudentinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
