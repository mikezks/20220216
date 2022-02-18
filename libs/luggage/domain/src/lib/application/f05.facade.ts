import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity05 } from '../entities/entity05';
import { Entity05DataService } from '../infrastructure/entity05.data.service';

@Injectable({ providedIn: 'root' })
export class F05Facade {
  private entity05ListSubject = new BehaviorSubject<Entity05[]>([]);
  entity05List$ = this.entity05ListSubject.asObservable();

  constructor(private entity05DataService: Entity05DataService) {}

  load(): void {
    this.entity05DataService.load().subscribe({
      next: (entity05List) => {
        this.entity05ListSubject.next(entity05List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
