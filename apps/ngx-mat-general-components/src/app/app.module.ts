import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatIntlTelModule } from '@ngx-mat-general-components/ngx-mat-intl-tel';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NgxMatIntlTelModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
