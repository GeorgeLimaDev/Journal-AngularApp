import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main1ProfileComponent } from './main1-profile.component';

describe('Main1ProfileComponent', () => {
  let component: Main1ProfileComponent;
  let fixture: ComponentFixture<Main1ProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Main1ProfileComponent]
    });
    fixture = TestBed.createComponent(Main1ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
