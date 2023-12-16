import { TestBed } from '@angular/core/testing';

import { PostagemSelecionadaService } from './postagem-selecionada.service';

describe('PostagemSelecionadaService', () => {
  let service: PostagemSelecionadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostagemSelecionadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
