import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'attendance',
  templateUrl: 'attendance.html'
})
export class AttendancePage {
  period: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.period = this.navParams.get('period');
  }


}
