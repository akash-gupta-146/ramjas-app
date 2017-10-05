import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  days: string[];
  public date = new Date();
  public today = this.date.getDay();
  public dayNumber = this.today -1;
  public dayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  public dayArray3C = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  pet: string = "TimeTable";
  
  constructor(public navCtrl: NavController) {
    this.days = [ 'Monday', 'Tuesday', 'Wedmesday', 'Thursday', 'Friday', 'Saturday' ]
  }

}
