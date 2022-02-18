import { Component, OnInit } from '@angular/core';
import { F05Facade } from '@flight-workspace/luggage/domain';

@Component({
  selector: 'luggage-f05',
  templateUrl: './f05.component.html',
  styleUrls: ['./f05.component.scss'],
})
export class F05Component implements OnInit {
  entity05List$ = this.f05Facade.entity05List$;

  constructor(private f05Facade: F05Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f05Facade.load();
  }
}
