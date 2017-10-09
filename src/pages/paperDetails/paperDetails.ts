import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'paperDetails',
  templateUrl: 'paperDetails.html'
})
export class PaperDetailsPage {
    paperInformation: { name: any; description: string; books: string; urls: string; videos: string; whitepaper: string; }[];
    period: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.period = this.navParams.get('period');

      this.paperInformation = [
          { 
            name: this.period.paper, 
            description: 'Nullam in ante ac dui rutrum aliquam vel in elit. Donec feugiat convallis est, vel volutpat lacus tristique a. Aenean interdum turpis enim, a condimentum ipsum varius non', 
            books: 'Book 1, Book 2, Book 3, Book 4',
            urls: 'www.url1.com, www.url2.com, www.url3.com',
            videos: 'video1, video2, video3',
            whitepaper: 'Aenean lacinia elementum tempor. Etiam accumsan vel ligula id fermentum. Maecenas tincidunt neque mauris, ac ultrices justo porttitor sed. Sed sed semper arcu, vitae varius libero. Vestibulum tempus dolor eu sollicitudin rutrum. Fusce non iaculis erat. Cras pharetra ante sit amet odio varius porta. Duis quis tortor pharetra, ornare quam sed, cursus eros. Morbi et sapien nunc. Quisque tristique consectetur leo congue efficitur. Phasellus eu dolor vel nunc fermentum pellentesque.'
           } 
      ]
  }


}
