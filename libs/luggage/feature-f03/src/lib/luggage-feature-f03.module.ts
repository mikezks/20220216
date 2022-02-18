import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { F03Component } from './f03.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F03Component],
  exports: [F03Component],
})
export class LuggageFeatureF03Module {}
