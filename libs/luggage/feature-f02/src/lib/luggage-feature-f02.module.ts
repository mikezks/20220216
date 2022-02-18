import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { F02Component } from './f02.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F02Component],
  exports: [F02Component],
})
export class LuggageFeatureF02Module {}
