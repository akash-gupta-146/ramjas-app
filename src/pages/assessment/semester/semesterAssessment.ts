import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'semesterAssessment',
  templateUrl: 'semesterAssessment.html'
})
export class SemesterAssessmentPage {
    results: { paper: string; paperCode: string; totalQuestion: string; attended: string; correct: string; incorrect: string; obtained: string; checkedBy: string; }[];
    days: string[];
    public dayArray = ['I', 'II', 'III', 'IV', 'V', 'VI'];
    public semester3c = ['I', 'II', 'III', 'IV', 'V', 'VI'];
  
    pet: string = "TimeTable";

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.days = ['I', 'II', 'III', 'IV', 'V', 'VI'];

    this.results = [
        { paper: 'Maths', paperCode: '1293',totalQuestion:'100', attended: '90', correct: '80', incorrect: '10', obtained:'80', checkedBy: 'Miss Reema'  },
        { paper: 'GE', paperCode: '1194',totalQuestion:'100', attended: '90', correct: '80', incorrect: '10', obtained:'80', checkedBy: 'Miss Seema'  },
        { paper: 'RV', paperCode: '1794',totalQuestion:'100', attended: '90', correct: '80', incorrect: '10', obtained:'80', checkedBy: 'Miss Renu'  },
        { paper: 'ACEE', paperCode: '1294',totalQuestion:'100', attended: '90', correct: '80', incorrect: '10', obtained:'80', checkedBy: 'Miss Tina'  },
        { paper: 'GC', paperCode: '1994',totalQuestion:'100', attended: '90', correct: '80', incorrect: '10', obtained:'80', checkedBy: 'Miss Taniya'  },
    ]
  }
  showAgreePrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Confirm Result',
      message: "Add Comment (if any)",
      inputs: [
        {
            name: 'description',
            placeholder: 'Description'
          },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  showDisAgreePrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Disagree Result',
      message: "Add title and description",
      inputs: [
        {
            name: 'title',
            placeholder: 'Title'
          },
        {
            name: 'description',
            placeholder: 'Description'
          },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
