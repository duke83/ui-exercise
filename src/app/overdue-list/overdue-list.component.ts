import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { interval } from 'rxjs';

import { IServer } from '../types/i-server';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-overdue-list',
  templateUrl: './overdue-list.component.html',
  styleUrls: ['./overdue-list.component.css']
})
export class OverdueListComponent implements OnInit {
  overdueServers: IServer[];

  constructor(public serverService: ServerService) { }

  ngOnInit() {
    interval(1000).subscribe(x => {
      this.filterOverdue();
    });
  }

  filterOverdue() {
    this.overdueServers = this.serverService.servers.filter(f => f.deadline < Date.now() && f.verified === false);
  }

  getDifference(previous: number) {

    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const elapsed = Date.now() - previous;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + ' seconds ago';
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + ' minutes ago';
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + ' hours ago';
    } else if (elapsed < msPerMonth) {
      return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
    } else if (elapsed < msPerYear) {
      return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
    } else {
      return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
    }
  }
}
