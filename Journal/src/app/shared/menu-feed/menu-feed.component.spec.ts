import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFeedComponent } from './menu-feed.component';

describe('MenuFeedComponent', () => {
  let component: MenuFeedComponent;
  let fixture: ComponentFixture<MenuFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuFeedComponent]
    });
    fixture = TestBed.createComponent(MenuFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
