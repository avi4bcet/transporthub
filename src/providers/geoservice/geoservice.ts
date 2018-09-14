import { HttpClient} from '@angular/common/http';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the GeoserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeoserviceProvider {
  arralist:any;
  constructor(public http: HttpClient) {
    //console.log('Hello GeoserviceProvider Provider');
  }

  addLog(long:number, lat: number) {

    this.http.get('http://localhost:5000/' +long+'/'+lat)
  .map((data : Response) =>{
    return data;
  }).toPromise().then(x => {
    
    //console.log(JSON.stringify(x));
  }).catch(err => console.log(err));
  }

}
