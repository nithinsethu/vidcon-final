import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ComponentsService {
  chatToggled = new Subject<void>();
  screenShare = new Subject<void>();
  constructor(){}


}
