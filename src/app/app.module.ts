import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { SharedService } from '../providers/shared.service';
import { ProfilePage } from '../pages/profile/profile';
import { DueAssignmentsPage } from '../pages/assignments/dueAssignments/dueAssignments';
import { ViewAssignmentPage } from '../pages/assignments/viewAssignment/viewAssignments';
import { AssessmentPage } from '../pages/assessment/assessment';
import { SemesterAssessmentPage } from '../pages/assessment/semester/semesterAssessment';
import { OverallAssessmentPage } from '../pages/assessment/overallAssessment/overallAssessment';
import { YearlyAssessmentPage } from '../pages/assessment/yearlyAssessment/yearlyAssessment';
import { PaperDetailsPage } from '../pages/paperDetails/paperDetails';
import { AttendancePage } from '../pages/paperDetails/attendance/attendance';
import { NotesPage } from '../pages/paperDetails/notes/notes';
import { AssignmentPage } from '../pages/paperDetails/assignment/assignment';
import { PaperAssessmentPage } from '../pages/paperDetails/assessment/assessment';
import { PaperMessagePage } from '../pages/paperDetails/message/message';
import { AssignmentListPage } from '../pages/paperDetails/assignment/assignmentlist/assignmentlist';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ProfilePage,
    DueAssignmentsPage,
    ViewAssignmentPage,
    AssessmentPage,
    SemesterAssessmentPage,
    OverallAssessmentPage,
    YearlyAssessmentPage,
    PaperDetailsPage,
    AttendancePage,
    NotesPage,
    AssignmentPage,
    PaperAssessmentPage,
    PaperMessagePage,
    AssignmentListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ProfilePage,
    DueAssignmentsPage,
    ViewAssignmentPage,
    AssessmentPage,
    SemesterAssessmentPage,
    OverallAssessmentPage,
    YearlyAssessmentPage,
    PaperDetailsPage,
    AttendancePage,
    NotesPage,
    AssignmentPage,
    PaperAssessmentPage,
    PaperMessagePage,
    AssignmentListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SharedService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
