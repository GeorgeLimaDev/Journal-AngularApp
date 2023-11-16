import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main2ProfileComponent } from './main2-profile.component';

describe('Main2ProfileComponent', () => {
  let component: Main2ProfileComponent;
  let fixture: ComponentFixture<Main2ProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Main2ProfileComponent]
    });
    fixture = TestBed.createComponent(Main2ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
