import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgxMatDigitInputComponent } from './ngx-mat-digit-input/ngx-mat-digit-input.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [NgxMatDigitInputComponent],
  exports: [NgxMatDigitInputComponent]
})
export class NgxMatDigitInputModule {}
