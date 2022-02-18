import { Component, OnInit } from '@angular/core';
import { F08Facade } from '@flight-workspace/luggage/domain';

@Component({
  selector: 'luggage-f08',
  templateUrl: './f08.component.html',
  styleUrls: ['./f08.component.scss'],
})
export class F08Component implements OnInit {
  entity08List$ = this.f08Facade.entity08List$;

  constructor(private f08Facade: F08Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f08Facade.load();
  }
}
