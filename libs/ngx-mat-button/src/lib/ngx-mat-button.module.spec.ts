import { async, TestBed } from '@angular/core/testing';
import { NgxMatButtonModule } from './ngx-mat-button.module';

describe('NgxMatButtonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxMatButtonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxMatButtonModule).toBeDefined();
  });
});
