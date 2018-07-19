import { Component, OnInit } from '@angular/core';
import { IServer } from '../types/i-server';

@Component({
  selector: 'app-server-add',
  templateUrl: './server-add.component.html',
  styleUrls: ['./server-add.component.css']
})
export class ServerAddComponent implements OnInit {

  serverModel: IServer;

  constructor() { }

  ngOnInit() {
    this.serverModel = this.newServer();
  }

  onSubmit() {
    console.log(this.serverModel);
  }

  newServer(): IServer {
    return {
      hostname: '',
      description: '',
      ip: '',
      deadline: new Date(),
      verified: false
    };
  }
}
