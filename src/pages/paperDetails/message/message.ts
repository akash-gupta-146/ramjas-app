import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'message',
  templateUrl: 'message.html'
})
export class PaperMessagePage {
  period: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.period = this.navParams.get('period');
  }


}
