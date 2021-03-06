import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatButtonModule } from '@ngx-mat-general-components/ngx-mat-button';
import { NgxMatDigitInputModule } from '@ngx-mat-general-components/ngx-mat-digit-input';
import { NgxMatIntlTelModule } from '@ngx-mat-general-components/ngx-mat-intl-tel';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxMatIntlTelModule,
    NgxMatDigitInputModule,
    NgxMatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
