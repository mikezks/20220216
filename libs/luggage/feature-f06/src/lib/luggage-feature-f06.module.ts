import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { F06Component } from './f06.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F06Component],
  exports: [F06Component],
})
export class LuggageFeatureF06Module {}
