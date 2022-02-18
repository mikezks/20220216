import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity08 } from '../entities/entity08';
import { Entity08DataService } from '../infrastructure/entity08.data.service';

@Injectable({ providedIn: 'root' })
export class F08Facade {
  private entity08ListSubject = new BehaviorSubject<Entity08[]>([]);
  entity08List$ = this.entity08ListSubject.asObservable();

  constructor(private entity08DataService: Entity08DataService) {}

  load(): void {
    this.entity08DataService.load().subscribe({
      next: (entity08List) => {
        this.entity08ListSubject.next(entity08List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
