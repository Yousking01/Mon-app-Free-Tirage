import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TirageComponent } from './tirage/tirage.component';
import { DetailsListComponent } from './details-list/details-list.component';
import { DetailsTirageComponent } from './details-tirage/details-tirage.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    TirageComponent,
    DetailsListComponent,
    DetailsTirageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
