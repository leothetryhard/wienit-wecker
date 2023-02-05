import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import { WeckerTeaserComponent } from './wecker-teaser/wecker-teaser.component';
import { WeckerDetailComponent } from './wecker-detail/wecker-detail.component';
import { WeckerRingingComponent } from './wecker-ringing/wecker-ringing.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeckerTeaserComponent,
    WeckerDetailComponent,
    WeckerRingingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
