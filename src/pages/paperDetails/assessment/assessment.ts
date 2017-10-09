import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'assessment',
  templateUrl: 'assessment.html'
})
export class PaperAssessmentPage {
  period: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
      this.period = this.navParams.get('period');
      console.log(this.period);
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
