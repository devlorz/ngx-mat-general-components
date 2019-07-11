import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { OnlyNumberDirective } from '@ngx-mat-general-components/directives';
import { NgxMatDigitInputComponent } from './ngx-mat-digit-input/ngx-mat-digit-input.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [NgxMatDigitInputComponent, OnlyNumberDirective],
  exports: [NgxMatDigitInputComponent]
})
export class NgxMatDigitInputModule {}
