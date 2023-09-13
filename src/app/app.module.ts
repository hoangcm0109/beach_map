import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './router/app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {
  MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER,
  MatAutocompleteModule,
} from '@angular/material/autocomplete';
import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER } from '@angular/material/select';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatAutocompleteModule,
  ],
  providers: [
    MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER,
    MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
