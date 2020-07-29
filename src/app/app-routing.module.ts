import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoteComponent } from './vote/vote.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [

  {
    path: 'result',
    component: ResultComponent
  },
  {
    path: 'result/:resultId',
    component: ResultComponent,
  },
  {
    path: 'vote',
    component: VoteComponent
  },
  { 
    path: '',
    redirectTo: '/vote', 
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
