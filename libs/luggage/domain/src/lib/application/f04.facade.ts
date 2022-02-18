import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity04 } from '../entities/entity04';
import { Entity04DataService } from '../infrastructure/entity04.data.service';

@Injectable({ providedIn: 'root' })
export class F04Facade {
  private entity04ListSubject = new BehaviorSubject<Entity04[]>([]);
  entity04List$ = this.entity04ListSubject.asObservable();

  constructor(private entity04DataService: Entity04DataService) {}

  load(): void {
    this.entity04DataService.load().subscribe({
      next: (entity04List) => {
        this.entity04ListSubject.next(entity04List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
