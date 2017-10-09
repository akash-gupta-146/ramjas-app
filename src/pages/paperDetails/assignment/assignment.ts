import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { PaperAssessmentPage } from '../assessment/assessment';
import { PaperMessagePage } from '../message/message';

@Component({
  selector: 'assignment',
  templateUrl: 'assignment.html'
})
export class AssignmentPage {
  assignment: any;
  period: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
      this.period = this.navParams.get('period');
      this.assignment = this.navParams.get('assignment');
      console.log(this.period);
      console.log(this.assignment);
      
  }
  
  openAssessment(period){
    this.navCtrl.push(PaperAssessmentPage, {'period': period});
  }
  openMessages(){
    this.navCtrl.push(PaperMessagePage,{'period':this.period});
  }


  showUpload() {
    let prompt = this.alertCtrl.create({
      title: 'Upload Assignment',
      message: "Select your assignment to submit",
      inputs: [
        {
          name: 'title',
          type: 'file',
          placeholder: 'Select file'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Canceled');
          }
        },
        {
          text: 'Upload',
          handler: data => {
            console.log('Uploaded');
          }
        }
      ]
    });
    prompt.present();
  }
}
