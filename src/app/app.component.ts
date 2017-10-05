import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SharedService } from '../providers/shared.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  category: string;
  faculty: Array<{ title: string, component: any, icon:any }>;
  students: Array<{ title: string, component: any, icon:any }>;
  hod: Array<{ title: string, component: any, icon:any }>;
  principal: Array<{ title: string, component: any, icon:any }>;
  admin: Array<{ title: string, component: any, icon:any }>;
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public event: Events,
              public sharedService:SharedService) {
    
    this.initializeApp();

    // used for an example of ngFor and navigation

    this.students = [
      { title: 'Dashboard', component: HomePage, icon: 'xyz.png' },
      { title: 'Students List', component: ListPage, icon: 'xyz.png' }
    ]

    this.faculty = [
      { title: 'Dashboard', component: HomePage, icon: 'xyz.png' },
      { title: 'Faculty List', component: ListPage, icon: 'xyz.png' }
    ]

    this.hod = [
      { title: 'Dashboard', component: HomePage, icon: 'xyz.png' },
      { title: 'HOD List', component: ListPage, icon: 'xyz.png' }
    ]

    this.principal = [
      { title: 'Dashboard', component: HomePage, icon: 'xyz.png' },
      { title: 'principal List', component: ListPage, icon: 'xyz.png' }
    ]

    this.admin = [
      { title: 'Dashboard', component: HomePage, icon: 'xyz.png' },
      { title: 'Admin List', component: ListPage, icon: 'xyz.png' }
    ]


  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.event.subscribe("user:login", (data) => {
        if(data.category == 'student')
          this.pages = this.students;
        else if(data.category == 'faculty')
          this.pages = this.faculty;
        else if(data.category == 'hod')
          this.pages = this.hod;
        else if(data.category == 'principal')
          this.pages = this.principal;
        else if(data.category == 'admin')
          this.pages = this.hod;
      })
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
