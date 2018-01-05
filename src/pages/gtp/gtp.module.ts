import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GtpPage } from './gtp';

@NgModule({
  declarations: [
    GtpPage,
  ],
  imports: [
    IonicPageModule.forChild(GtpPage),
  ],
})
export class GtpPageModule {}
