import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadoPerfilComponent } from './dado-perfil.component';

describe('DadoPerfilComponent', () => {
  let component: DadoPerfilComponent;
  let fixture: ComponentFixture<DadoPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadoPerfilComponent]
    });
    fixture = TestBed.createComponent(DadoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
