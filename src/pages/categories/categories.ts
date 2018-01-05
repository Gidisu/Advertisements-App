import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PricePage } from '../price/price';
import { BatikPage } from '../batik/batik';
import { TiePage } from '../tie/tie';
import { SmockPage } from '../smock/smock';
import { GtpPage } from '../gtp/gtp';
import { WoodenPage } from '../wooden/wooden';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }
ca(){
  this.navCtrl.push(PricePage);
}
ka(){
this.navCtrl.push(BatikPage);

}
wa(){
  this.navCtrl.push(TiePage);
}
sm(){
  this.navCtrl.push(SmockPage);
}
gtp(){
  this.navCtrl.push(GtpPage);
}
woo(){
  this.navCtrl.push(WoodenPage);
}
}
