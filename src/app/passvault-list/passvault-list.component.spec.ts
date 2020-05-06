import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassvaultListComponent } from './passvault-list.component';

describe('PassvaultListComponent', () => {
  let component: PassvaultListComponent;
  let fixture: ComponentFixture<PassvaultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassvaultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassvaultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
