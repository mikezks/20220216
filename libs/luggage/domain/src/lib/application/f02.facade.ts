import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity02 } from '../entities/entity02';
import { Entity02DataService } from '../infrastructure/entity02.data.service';

@Injectable({ providedIn: 'root' })
export class F02Facade {
  private entity02ListSubject = new BehaviorSubject<Entity02[]>([]);
  entity02List$ = this.entity02ListSubject.asObservable();

  constructor(private entity02DataService: Entity02DataService) {}

  load(): void {
    this.entity02DataService.load().subscribe({
      next: (entity02List) => {
        this.entity02ListSubject.next(entity02List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
