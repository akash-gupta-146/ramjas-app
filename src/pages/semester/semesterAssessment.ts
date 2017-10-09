import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'semesterAssessment',
  templateUrl: 'semesterAssessment.html'
})
export class SemesterAssessmentPage {
    days: string[];
    public dayArray = ['I', 'II', 'III', 'IV', 'V', 'VI'];
    public semester3c = ['I', 'II', 'III', 'IV', 'V', 'VI'];
  
    pet: string = "TimeTable";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.days = ['I', 'II', 'III', 'IV', 'V', 'VI'];
  }


}
