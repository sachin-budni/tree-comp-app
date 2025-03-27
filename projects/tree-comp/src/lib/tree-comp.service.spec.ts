import { TestBed } from '@angular/core/testing';

import { TreeCompService } from './tree-comp.service';

describe('TreeCompService', () => {
  let service: TreeCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
