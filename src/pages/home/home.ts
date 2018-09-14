import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation'
import { GeoserviceProvider } from '../../providers/geoservice/geoservice';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lat:any;
  long: any;
 
  constructor(public navCtrl: NavController, public geo: Geolocation, private geoserv: GeoserviceProvider) {

  }


  ionViewDidLoad() {
    this.geo.getCurrentPosition().then(pos => {
      setInterval(() => {
      
         this.geoserv.addLog(pos.coords.longitude, pos.coords.latitude);
          //this.i++;
      //}

        
      }, 300000);}).catch(err => console.log(err));
  }

}
