import { Component, OnInit } from '@angular/core';
import { F07Facade } from '@flight-workspace/luggage/domain';

@Component({
  selector: 'luggage-f07',
  templateUrl: './f07.component.html',
  styleUrls: ['./f07.component.scss'],
})
export class F07Component implements OnInit {
  entity07List$ = this.f07Facade.entity07List$;

  constructor(private f07Facade: F07Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f07Facade.load();
  }
}
