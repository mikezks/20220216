import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity07 } from '../entities/entity07';
import { Entity07DataService } from '../infrastructure/entity07.data.service';

@Injectable({ providedIn: 'root' })
export class F07Facade {
  private entity07ListSubject = new BehaviorSubject<Entity07[]>([]);
  entity07List$ = this.entity07ListSubject.asObservable();

  constructor(private entity07DataService: Entity07DataService) {}

  load(): void {
    this.entity07DataService.load().subscribe({
      next: (entity07List) => {
        this.entity07ListSubject.next(entity07List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
