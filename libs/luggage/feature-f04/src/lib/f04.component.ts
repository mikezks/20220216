import { Component, OnInit } from '@angular/core';
import { F04Facade } from '@flight-workspace/luggage/domain';

@Component({
  selector: 'luggage-f04',
  templateUrl: './f04.component.html',
  styleUrls: ['./f04.component.scss'],
})
export class F04Component implements OnInit {
  entity04List$ = this.f04Facade.entity04List$;

  constructor(private f04Facade: F04Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f04Facade.load();
  }
}
