import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudentInfoComponent } from './sudent-info.component';

describe('SudentInfoComponent', () => {
  let component: SudentInfoComponent;
  let fixture: ComponentFixture<SudentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudentInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
