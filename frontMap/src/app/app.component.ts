import { Component,OnInit } from '@angular/core';
import {GetDataService} from '../app/services/get-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontMap';
  data:any;
  constructor(private getData:GetDataService){
    this.getData.getData().subscribe((data)=>{
      console.log(data);
      this.data=data;
    });
  }

  getPersona(name){
    this.getData.getPersona(name).subscribe((persona)=>{
      this.data=persona;
    })
  };

}
