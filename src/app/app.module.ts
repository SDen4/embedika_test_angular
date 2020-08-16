import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { FiltersComponent } from './filters/filters.component';
import { CardComponent } from './card/card.component';
import { SearchPipe } from './search.pipe';
import { SearchUsers } from './searchUsers.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    FiltersComponent,
    CardComponent,
    SearchPipe,
    SearchUsers
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
