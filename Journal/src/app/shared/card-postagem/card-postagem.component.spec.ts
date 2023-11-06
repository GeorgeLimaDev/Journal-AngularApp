import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostagemComponent } from './card-postagem.component';

describe('CardPostagemComponent', () => {
  let component: CardPostagemComponent;
  let fixture: ComponentFixture<CardPostagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPostagemComponent]
    });
    fixture = TestBed.createComponent(CardPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
