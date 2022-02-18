import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LuggageFeatureCheckinModule } from '@flight-workspace/luggage/feature-checkin';
import { HttpClientModule } from '@angular/common/http';
import { LuggageFeatureReportLossModule } from '@flight-workspace/luggage/feature-report-loss';
import { LuggageFeatureF01Module } from '@flight-workspace/luggage/feature-f01';
import { LuggageFeatureF02Module } from '@flight-workspace/luggage/feature-f02';
import { LuggageFeatureF03Module } from '@flight-workspace/luggage/feature-f03';
import { LuggageFeatureF04Module } from '@flight-workspace/luggage/feature-f04';
import { LuggageFeatureF05Module } from '@flight-workspace/luggage/feature-f05';
import { LuggageFeatureF06Module } from '@flight-workspace/luggage/feature-f06';
import { LuggageFeatureF07Module } from '@flight-workspace/luggage/feature-f07';
import { LuggageFeatureF08Module } from '@flight-workspace/luggage/feature-f08';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    LuggageFeatureCheckinModule,
    HttpClientModule,
    LuggageFeatureReportLossModule,
    LuggageFeatureF01Module,
    LuggageFeatureF02Module,
    LuggageFeatureF03Module,
    LuggageFeatureF04Module,
    LuggageFeatureF05Module,
    LuggageFeatureF06Module,
    LuggageFeatureF07Module,
    LuggageFeatureF08Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
