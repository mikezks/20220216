import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { F07Component } from './f07.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F07Component],
  exports: [F07Component],
})
export class LuggageFeatureF07Module {}
