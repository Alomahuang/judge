import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VoteModule } from './vote/vote.module';
import { ResultModule } from './result/result.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    ResultModule,
    VoteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
