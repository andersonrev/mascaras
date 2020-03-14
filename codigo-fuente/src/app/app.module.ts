import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TextMaskModule} from 'angular2-text-mask';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TextMaskModule,
    CurrencyMaskModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
