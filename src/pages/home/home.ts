import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaperDetailsPage } from '../paperDetails/paperDetails';
import { AttendancePage } from '../paperDetails/attendance/attendance';
import { NotesPage } from '../paperDetails/notes/notes';
import { PaperMessagePage } from '../paperDetails/message/message';
import { AssignmentListPage } from '../paperDetails/assignment/assignmentlist/assignmentlist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: [`
  ion-label{
      margin: 5px 0 5px 6px !important;
}`]
})
export class HomePage {
  period: any;
  timeTable: { time: string; duration: string; status: string; paper: string; teacher: string; room: string; }[];
  days: string[];
  public date = new Date();
  public today = this.date.getDay();
  public dayNumber = this.today -1;
  public dayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  public dayArray3C = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  pet: string = "TimeTable";
  
  constructor(public navCtrl: NavController) {
    this.days = [ 'Monday', 'Tuesday', 'Wedmesday', 'Thursday', 'Friday', 'Saturday' ];

    this.timeTable = [ 
      {time: '8:40 AM', duration: '55 mins', status: 'In Progress', paper:'GE', teacher:'Miss Shini Mehta', room:'10'},
      {time: '9:35', duration: '55 mins', status: 'Not Started', paper:'AECC', teacher:'Miss Jigyasa', room:'4'},
      {time: '10:30', duration: '55 mins', status: 'Not Started', paper:'RV', teacher:'Mr Anish Sharma', room:'5'},
      {time: '11:25', duration: '55 mins', status: 'Not Started', paper:'NA', teacher:'Mr Atul Jain', room:'11'},
      {time: '12:20', duration: '55 mins', status: 'Not Started', paper:'NA', teacher:'Mr Atul Jain', room:'11'},
      {time: '9:35', duration: '55 mins', status: 'Not Started', paper:'AECC', teacher:'Miss Jigyasa', room:'4'},
      {time: '10:30', duration: '55 mins', status: 'Not Started', paper:'RV', teacher:'Mr Anish Sharma', room:'5'},
      {time: '11:25', duration: '55 mins', status: 'Not Started', paper:'NA', teacher:'Mr Atul Jain', room:'11'},
      {time: '12:20', duration: '55 mins', status: 'Not Started', paper:'NA', teacher:'Mr Atul Jain', room:'11'},
    ]
  }

  openPaperDetails(period){
    this.period = period;
    this.navCtrl.push(PaperDetailsPage, {'period': this.period});
  }

  openAttendancePage(period){
    this.navCtrl.push(AttendancePage, {'period': period});
  }

  openNotesPage(period){
    this.navCtrl.push(NotesPage, {'period': period});
  }

  openAssignmentPage(period){
    this.navCtrl.push(AssignmentListPage, {'period': period});
  }

  openPaperMessagePage(){
    this.navCtrl.push(PaperMessagePage, {'period': this.period});
  }
}
