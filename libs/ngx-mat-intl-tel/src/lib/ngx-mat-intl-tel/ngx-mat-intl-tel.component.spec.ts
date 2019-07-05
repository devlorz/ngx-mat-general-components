import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatIntlTelComponent } from './ngx-mat-intl-tel.component';

describe('NgxMatIntlTelComponent', () => {
  let component: NgxMatIntlTelComponent;
  let fixture: ComponentFixture<NgxMatIntlTelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxMatIntlTelComponent],
      imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        ReactiveFormsModule,
        NoopAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatIntlTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
