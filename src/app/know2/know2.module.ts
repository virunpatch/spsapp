import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Know2PageRoutingModule } from './know2-routing.module';

import { Know2Page } from './know2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Know2PageRoutingModule
  ],
  declarations: [Know2Page]
})
export class Know2PageModule {}
