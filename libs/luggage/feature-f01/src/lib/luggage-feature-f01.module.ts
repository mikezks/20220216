import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { F01Component } from './f01.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F01Component],
  exports: [F01Component],
})
export class LuggageFeatureF01Module {}
