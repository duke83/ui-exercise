import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerListComponent } from './server-list/server-list.component';
import { OverdueListComponent } from './overdue-list/overdue-list.component';
import { ServerAddComponent } from './server-add/server-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerListComponent,
    OverdueListComponent,
    ServerAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
