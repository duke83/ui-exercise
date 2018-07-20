import { Injectable } from '@angular/core';
import { IServer } from './types/i-server';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  servers: IServer[] = [];
  showAddForm = false;

  constructor() { }

}
