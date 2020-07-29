import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteComponent } from './vote.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [VoteComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class VoteModule { }
