import { Component, OnInit } from '@angular/core';
import { F03Facade } from '@flight-workspace/luggage/domain';

@Component({
  selector: 'luggage-f03',
  templateUrl: './f03.component.html',
  styleUrls: ['./f03.component.scss'],
})
export class F03Component implements OnInit {
  entity03List$ = this.f03Facade.entity03List$;

  constructor(private f03Facade: F03Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f03Facade.load();
  }
}
