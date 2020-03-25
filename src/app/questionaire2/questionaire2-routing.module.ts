import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Questionaire2Page } from './questionaire2.page';

const routes: Routes = [
  {
    path: '',
    component: Questionaire2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Questionaire2PageRoutingModule {}
