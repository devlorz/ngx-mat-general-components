import { async, TestBed } from '@angular/core/testing';
import { NgxMatDigitInputModule } from './ngx-mat-digit-input.module';

describe('NgxMatDigitInputModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxMatDigitInputModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxMatDigitInputModule).toBeDefined();
  });
});
