import { Component, OnInit } from '@angular/core';
import { IServer } from '../types/i-server';
import { ServerService } from 'src/app/server.service';


@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {


  constructor(public serverService: ServerService) { }

  ngOnInit() {
    this.serverService.servers.push(
      {
        hostname: 'hostname',
        description: 'description',
        ip: '1.1.1.1.',
        deadline: new Date().getTime(),
        verified: false
      }
    );
  }

  removeServer(hostname: string) {
    console.log(hostname);
    const idx = this.serverService.servers.findIndex(s => s.hostname === hostname);
    if (idx > -1) {
      this.serverService.servers.splice(idx, 1);
    }

  }

  verifyServer(hostname: string) {
    const idx = this.serverService.servers.findIndex(s => s.hostname === hostname);
    this.serverService.servers[idx].verified = true;
  }

}
