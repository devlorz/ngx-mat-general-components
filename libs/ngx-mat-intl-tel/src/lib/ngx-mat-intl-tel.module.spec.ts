import { async, TestBed } from '@angular/core/testing';
import { NgxMatIntlTelModule } from './ngx-mat-intl-tel.module';

describe('NgxMatIntlTelModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxMatIntlTelModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxMatIntlTelModule).toBeDefined();
  });
});
