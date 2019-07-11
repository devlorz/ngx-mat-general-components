import { async, TestBed } from '@angular/core/testing';
import { DirectivesModule } from './directives.module';

describe('DirectivesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DirectivesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DirectivesModule).toBeDefined();
  });
});
