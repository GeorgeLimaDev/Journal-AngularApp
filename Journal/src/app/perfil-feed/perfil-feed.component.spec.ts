import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFeedComponent } from './perfil-feed.component';

describe('PerfilFeedComponent', () => {
  let component: PerfilFeedComponent;
  let fixture: ComponentFixture<PerfilFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilFeedComponent]
    });
    fixture = TestBed.createComponent(PerfilFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
