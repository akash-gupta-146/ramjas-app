import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'overallAssessment',
  templateUrl: 'overallAssessment.html'
})
export class OverallAssessmentPage {
  results: { sem: string; tp1marks: string; tp2marks: string; tp3marks: string; total: string; }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.results = [
      {sem:'I', tp1marks:'390', tp2marks:'400', tp3marks:'450', total: '1240' },
      {sem:'II', tp1marks:'390', tp2marks:'400', tp3marks:'450', total:'1240'},
      {sem:'III', tp1marks:'390', tp2marks:'400', tp3marks:'450', total:'1240' },
      {sem:'IV', tp1marks:'390', tp2marks:'400', tp3marks:'450', total:'1240' },
      {sem:'V', tp1marks:'390', tp2marks:'400', tp3marks:'450', total:'1240' },
      {sem:'VI', tp1marks:'390', tp2marks:'400', tp3marks:'450', total:'1240' },
    ]
  }


}
