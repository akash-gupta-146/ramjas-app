import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SemesterAssessmentPage } from './semester/semesterAssessment';
import { DueAssignmentsPage } from '../assignments/dueAssignments/dueAssignments';
import { YearlyAssessmentPage } from './yearlyAssessment/yearlyAssessment';
import { OverallAssessmentPage } from './overallAssessment/overallAssessment';

@Component({
  template: `
    <ion-tabs>
      <ion-tab tabIcon="paper" tabText="Semester" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="photos"  tabText="Yearly" [root]="tab2"></ion-tab>
      <ion-tab tabIcon="school" tabText="Overall" [root]="tab3"></ion-tab>
    </ion-tabs>`
})
export class AssessmentPage {

  tab1: any;
  tab2: any;
  tab3: any;

  constructor() {
    this.tab1 = SemesterAssessmentPage;
    this.tab2 = YearlyAssessmentPage;
    this.tab3 = OverallAssessmentPage;
  }
}