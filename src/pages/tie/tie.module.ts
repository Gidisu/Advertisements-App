import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TiePage } from './tie';

@NgModule({
  declarations: [
    TiePage,
  ],
  imports: [
    IonicPageModule.forChild(TiePage),
  ],
})
export class TiePageModule {}
