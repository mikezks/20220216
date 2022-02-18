import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity01 } from '../entities/entity01';
import { Entity01DataService } from '../infrastructure/entity01.data.service';

@Injectable({ providedIn: 'root' })
export class F01Facade {
  private entity01ListSubject = new BehaviorSubject<Entity01[]>([]);
  entity01List$ = this.entity01ListSubject.asObservable();

  constructor(private entity01DataService: Entity01DataService) {}

  load(): void {
    this.entity01DataService.load().subscribe({
      next: (entity01List) => {
        this.entity01ListSubject.next(entity01List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
