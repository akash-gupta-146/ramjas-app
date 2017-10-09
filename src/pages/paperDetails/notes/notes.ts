import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'notes',
  templateUrl: 'notes.html'
})
export class NotesPage {
  period: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.period = this.navParams.get('period');
  }


}
