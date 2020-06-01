import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ComponentsService {
  chatToggled = new EventEmitter<void>();
  constructor(){}


}
