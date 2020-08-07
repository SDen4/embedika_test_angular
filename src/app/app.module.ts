import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { FiltersComponent } from './filters/filters.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    FiltersComponent,
    MainComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
