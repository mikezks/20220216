import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity06 } from '../entities/entity06';
import { Entity06DataService } from '../infrastructure/entity06.data.service';

@Injectable({ providedIn: 'root' })
export class F06Facade {
  private entity06ListSubject = new BehaviorSubject<Entity06[]>([]);
  entity06List$ = this.entity06ListSubject.asObservable();

  constructor(private entity06DataService: Entity06DataService) {}

  load(): void {
    this.entity06DataService.load().subscribe({
      next: (entity06List) => {
        this.entity06ListSubject.next(entity06List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
