import { Component, OnInit } from '@angular/core';
import { F01Facade } from '@flight-workspace/luggage/domain';

@Component({
  selector: 'luggage-f01',
  templateUrl: './f01.component.html',
  styleUrls: ['./f01.component.scss'],
})
export class F01Component implements OnInit {
  entity01List$ = this.f01Facade.entity01List$;

  constructor(private f01Facade: F01Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f01Facade.load();
  }
}
