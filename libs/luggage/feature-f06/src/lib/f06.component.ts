import { Component, OnInit } from '@angular/core';
import { F06Facade } from '@flight-workspace/luggage/domain';

@Component({
  selector: 'luggage-f06',
  templateUrl: './f06.component.html',
  styleUrls: ['./f06.component.scss'],
})
export class F06Component implements OnInit {
  entity06List$ = this.f06Facade.entity06List$;

  constructor(private f06Facade: F06Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f06Facade.load();
  }
}
