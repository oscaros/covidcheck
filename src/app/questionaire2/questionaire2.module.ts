import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Questionaire2PageRoutingModule } from './questionaire2-routing.module';

import { Questionaire2Page } from './questionaire2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Questionaire2PageRoutingModule
  ],
  declarations: [Questionaire2Page]
})
export class Questionaire2PageModule {}
