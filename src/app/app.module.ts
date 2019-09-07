import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearcherComponent } from './searcher/searcher.component';
import StorageManager from '../storage/StorageManager';
import { BackgroundComponent } from './background/background.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearcherComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    StorageManager,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
