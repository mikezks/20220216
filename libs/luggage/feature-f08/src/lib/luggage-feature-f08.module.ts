import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { F08Component } from './f08.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F08Component],
  exports: [F08Component],
})
export class LuggageFeatureF08Module {}
