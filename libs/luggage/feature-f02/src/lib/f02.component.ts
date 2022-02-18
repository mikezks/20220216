import { Component, OnInit } from '@angular/core';
import { F02Facade } from '@flight-workspace/luggage/domain';

@Component({
  selector: 'luggage-f02',
  templateUrl: './f02.component.html',
  styleUrls: ['./f02.component.scss'],
})
export class F02Component implements OnInit {
  entity02List$ = this.f02Facade.entity02List$;

  constructor(private f02Facade: F02Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f02Facade.load();
  }
}
