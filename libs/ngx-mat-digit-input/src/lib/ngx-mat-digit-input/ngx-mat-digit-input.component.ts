import { DOCUMENT } from '@angular/common';
import {
  Component,
  forwardRef,
  Inject,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormControl,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { untilDestroy } from '@ngrx-utils/store';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-mat-digit-input',
  templateUrl: './ngx-mat-digit-input.component.html',
  styleUrls: ['./ngx-mat-digit-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxMatDigitInputComponent),
      multi: true
    }
  ]
})
export class NgxMatDigitInputComponent
  implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() digits = 6;
  digitsForm: FormArray;
  value: string;

  onChange: (obj: any) => any;
  onTouch: () => any;

  constructor(@Inject(DOCUMENT) private document: any) {}

  ngOnInit() {
    this.digitsForm = new FormArray(this.buildFormArray());
    this.digitsForm.valueChanges
      .pipe(untilDestroy(this))
      .subscribe((val: number[]) => {
        this.value = val.reduce((acc, cur) => {
          acc += cur;
          return acc;
        }, '');

        if (this.onChange) {
          this.onChange(this.value);
        }
      });
  }

  ngOnDestroy() {}

  writeValue(value: string) {
    // TODO: implement writeValue later
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  keytab(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace') {
      this.focusPrevious(index);
    } else if (event.key === 'ArrowLeft') {
      this.focusPrevious(index);
    } else if (event.key === 'ArrowRight') {
      this.focusNext(index);
    } else {
      const value = +event.key;
      if (!isNaN(value)) {
        this.digitsForm.at(index).patchValue(value);
        this.focusNext(index);
      }
    }
  }

  private focusPrevious(index: number) {
    const previousIndex = index - 1;
    if (previousIndex >= 0) {
      const previousElement = this.document.getElementById(
        'digit-' + previousIndex
      );
      previousElement.focus();
    }
  }

  private focusNext(index: number) {
    const nextIndex = index + 1;
    if (nextIndex < this.digits) {
      const nextElement = this.document.getElementById('digit-' + nextIndex);
      nextElement.focus();
    }
  }

  private buildFormArray(): FormControl[] {
    return Array(this.digits)
      .fill('')
      .map(res => new FormControl(''));
  }
}
