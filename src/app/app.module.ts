import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { FiltersComponent } from './filters/filters.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    FiltersComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
