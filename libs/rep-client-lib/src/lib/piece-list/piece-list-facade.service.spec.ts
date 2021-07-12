/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PieceListFacadeService } from './piece-list-facade.service';

describe('Service: PieceListFacade', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PieceListFacadeService]
    });
  });

  it('should ...', inject([PieceListFacadeService], (service: PieceListFacadeService) => {
    expect(service).toBeTruthy();
  }));
});
