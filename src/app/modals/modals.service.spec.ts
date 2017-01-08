/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModalsService } from './modals.service';

describe('DialogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalsService]
    });
  });

  it('should ...', inject([ModalsService], (service: DialogsService) => {
    expect(service).toBeTruthy();
  }));
});
