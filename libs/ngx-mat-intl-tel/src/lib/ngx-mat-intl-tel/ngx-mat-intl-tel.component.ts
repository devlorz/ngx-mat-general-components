import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { untilDestroy } from '@ngrx-utils/store';
import { countryCodes as countryCodeData } from '../model/country-code';
import { Country } from '../model/country.model';

@Component({
  selector: 'ngx-mat-intl-tel',
  templateUrl: './ngx-mat-intl-tel.component.html',
  styleUrls: ['./ngx-mat-intl-tel.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxMatIntlTelComponent),
      multi: true
    }
  ]
})
export class NgxMatIntlTelComponent
  implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() label: string;

  selectedCountry: Country = {
    areaCodes: undefined,
    dialCode: '47',
    flagClass: 'NO',
    iso2: 'no',
    name: 'Norway',
    placeHolder: '',
    priority: 0
  };
  form = new FormGroup({
    countryCode: new FormControl(`+${this.selectedCountry.dialCode}`),
    phoneNumber: new FormControl('')
  });
  value: string;
  allCountries: Array<Country> = [];

  onChange: (obj: any) => any;
  onTouch: () => any;

  constructor() {
    this.fetchCountryData();
  }

  ngOnInit() {
    this.form.valueChanges.pipe(untilDestroy(this)).subscribe(val => {
      this.value = this.form.value.countryCode + this.form.value.phoneNumber;
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

  onCountrySelect(country: Country) {
    this.selectedCountry = country;
    this.form.get('countryCode').patchValue(`+${country.dialCode}`);
  }

  protected fetchCountryData(): void {
    countryCodeData.allCountries.forEach(c => {
      const country: Country = {
        name: c[0].toString(),
        iso2: c[1].toString(),
        dialCode: c[2].toString(),
        priority: +c[3] || 0,
        areaCodes: (c[4] as string[]) || undefined,
        flagClass: c[1].toString().toUpperCase(),
        placeHolder: ''
      };

      this.allCountries.push(country);
    });
  }
}
