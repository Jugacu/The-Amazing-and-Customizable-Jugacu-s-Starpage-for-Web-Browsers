import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearcherComponent } from './searcher/searcher.component';
import StorageManager from '../storage/StorageManager';
import { BackgroundComponent } from './background/background.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { MarkersComponent } from './markers/markers.component';
import { ClockComponent } from './clock/clock.component';
import {AngularDraggableModule} from 'angular2-draggable';
import SettingsManager from '../settings/SettingsManager';

@NgModule({
  declarations: [
    AppComponent,
    SearcherComponent,
    BackgroundComponent,
    MarkersComponent,
    ClockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularDraggableModule
  ],
  providers: [
    StorageManager,
    SettingsManager,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
