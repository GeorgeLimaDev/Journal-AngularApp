import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantemPostagemComponent } from './mantem-postagem.component';

describe('MantemPostagemComponent', () => {
  let component: MantemPostagemComponent;
  let fixture: ComponentFixture<MantemPostagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantemPostagemComponent]
    });
    fixture = TestBed.createComponent(MantemPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
