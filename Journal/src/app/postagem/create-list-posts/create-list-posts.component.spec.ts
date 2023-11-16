import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListPostsComponent } from './create-list-posts.component';

describe('CreateListPostsComponent', () => {
  let component: CreateListPostsComponent;
  let fixture: ComponentFixture<CreateListPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateListPostsComponent]
    });
    fixture = TestBed.createComponent(CreateListPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
