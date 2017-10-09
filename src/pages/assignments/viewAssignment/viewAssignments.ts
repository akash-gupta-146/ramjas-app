import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'viewAssignments',
  templateUrl: 'viewAssignments.html'
})
export class ViewAssignmentPage {
    assignment: any;
    dueAssignments: { image: string; subject: string; description: string; leftTime: string; }[];

  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.assignment = navParams.get('assignment');
  }


}