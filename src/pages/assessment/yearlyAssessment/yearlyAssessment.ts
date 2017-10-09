import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'yearlyAssessment',
  templateUrl: 'yearlyAssessment.html'
})
export class YearlyAssessmentPage {
  marks: { testpaper: string; math: string; rv: string; acce: string; gc: string; total: string; }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.marks = [
      {testpaper: 'Cumulative Test 1', math: '90', rv:'60', acce: '90',gc: '50', total: '290' },
      {testpaper: 'Cumulative Test 2', math: '10', rv:'60', acce: '90',gc: '50', total: '290' },
      {testpaper: 'Final Exam', math: '80', rv:'60', acce: '90',gc: '50', total: '290' },
    ]
  }


}
