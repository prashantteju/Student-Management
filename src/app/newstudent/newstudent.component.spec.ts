import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstudentComponent } from './newstudent.component';

describe('NewstudentComponent', () => {
  let component: NewstudentComponent;
  let fixture: ComponentFixture<NewstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewstudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

function expect(component: NewstudentComponent) {
  throw new Error('Function not implemented.');
}

