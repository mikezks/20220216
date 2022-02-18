import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { F05Component } from './f05.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F05Component],
  exports: [F05Component],
})
export class LuggageFeatureF05Module {}
