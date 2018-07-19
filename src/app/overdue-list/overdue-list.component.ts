import { Component, OnInit } from '@angular/core';
import {IServer} from '../types/i-server';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-overdue-list',
  templateUrl: './overdue-list.component.html',
  styleUrls: ['./overdue-list.component.css']
})
export class OverdueListComponent implements OnInit {
  sysDate: number = new Date().getTime();
  constructor(public serverService: ServerService) { }

  ngOnInit() {
  }
  getDifference(deadline: number) {

     const rtrn = (this.sysDate - deadline) / 36e5;
    return rtrn;
  }
}
