import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsProfileComponent } from './suggestions-profile.component';

describe('SuggestionsProfileComponent', () => {
  let component: SuggestionsProfileComponent;
  let fixture: ComponentFixture<SuggestionsProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestionsProfileComponent]
    });
    fixture = TestBed.createComponent(SuggestionsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
