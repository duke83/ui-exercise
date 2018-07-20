import { Component, OnInit, Input } from '@angular/core';
import { IServer } from '../types/i-server';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-server-add',
  templateUrl: './server-add.component.html',
  styleUrls: ['./server-add.component.css']
})
export class ServerAddComponent implements OnInit {
 @Input() serverAddForm;
  serverModel: IServer;

  constructor(public serverService: ServerService) { }

  ngOnInit() {
    this.serverModel = this.newServer();
  }

  onSubmit() {
    console.log(this.serverModel);
    const newDeadline = new Date(this.serverModel.deadline).getTime();
    this.serverModel.deadline = newDeadline;
    this.serverService.servers.push(this.serverModel);
    this.serverAddForm.resetForm(); // this.serverModel = this.newServer();
  }

  newServer(): IServer {
    return {
      hostname: '',
      description: '',
      ip: '',
      deadline: null,
      verified: false
    };
  }
}
