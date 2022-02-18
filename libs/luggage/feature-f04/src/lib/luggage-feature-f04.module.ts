import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { F04Component } from './f04.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F04Component],
  exports: [F04Component],
})
export class LuggageFeatureF04Module {}
