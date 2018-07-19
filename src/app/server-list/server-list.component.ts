import { Component, OnInit } from '@angular/core';
import {IServer} from '../types/i-server';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

servers: IServer[] = [];

  constructor() { }

  ngOnInit() {
    this.servers.push(
      {
        hostname: 'hostname',
        description: 'description',
        ip: '1.1.1.1.',
        deadline: new Date(),
        verified: false
    }
    );
  }

  removeServer(hostname: string) {
console.log(hostname);
  }

}
