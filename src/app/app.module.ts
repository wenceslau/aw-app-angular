import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { favoriteReducer } from './states/favorite-pokemon/reducer/app.reducer';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { HeartComponent } from './components/heart/heart.component';
import { ListComponent } from './components/list/list.component';
import {FormsModule} from '@angular/forms';
import {NgOptimizedImage} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    HeartComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage,
    StoreModule.forRoot({favorite:favoriteReducer})

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
