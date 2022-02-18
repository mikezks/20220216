import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity03 } from '../entities/entity03';
import { Entity03DataService } from '../infrastructure/entity03.data.service';

@Injectable({ providedIn: 'root' })
export class F03Facade {
  private entity03ListSubject = new BehaviorSubject<Entity03[]>([]);
  entity03List$ = this.entity03ListSubject.asObservable();

  constructor(private entity03DataService: Entity03DataService) {}

  load(): void {
    this.entity03DataService.load().subscribe({
      next: (entity03List) => {
        this.entity03ListSubject.next(entity03List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
