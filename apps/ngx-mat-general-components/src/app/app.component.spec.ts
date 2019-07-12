import { async, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatButtonModule } from '@ngx-mat-general-components/ngx-mat-button';
import { NgxMatDigitInputModule } from '@ngx-mat-general-components/ngx-mat-digit-input';
import { NgxMatIntlTelModule } from '@ngx-mat-general-components/ngx-mat-intl-tel';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        NgxMatIntlTelModule,
        NgxMatDigitInputModule,
        NgxMatButtonModule,
        NoopAnimationsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
