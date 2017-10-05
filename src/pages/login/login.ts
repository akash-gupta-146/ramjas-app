import { Component } from '@angular/core';
import { NavController, Platform, Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SharedService } from '../../providers/shared.service';
import { MyApp } from '../../app/app.component';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

  category: string;
  name:string;

  constructor(public navCtrl: NavController,
              public sharedService:SharedService,
              public event: Events) {

  }

  login(){
    this.event.publish("user:login", {category: this.category});
    this.navCtrl.setRoot(HomePage);
  }

}
