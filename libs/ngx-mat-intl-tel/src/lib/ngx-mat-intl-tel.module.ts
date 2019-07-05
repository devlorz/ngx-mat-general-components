import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule
} from '@angular/material';
import { NgxMatIntlTelComponent } from './ngx-mat-intl-tel/ngx-mat-intl-tel.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    ReactiveFormsModule
  ],
  declarations: [NgxMatIntlTelComponent],
  exports: [NgxMatIntlTelComponent]
})
export class NgxMatIntlTelModule {}
