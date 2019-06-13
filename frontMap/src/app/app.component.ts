import { Component,OnInit } from '@angular/core';
import {GetDataService} from '../app/services/get-data.service';  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontMap';
  data:any;
  constructor(private getData:GetDataService){}

  async ngOnInit(){
    this.data=await this.getData.getData().subscribe();
    console.log(this.data);
    // this.data=[
    //   {
    //     nombre:'Julian',
    //     lont:'-75.543',
    //     lat:'6.223'
    //   },
    //   {
    //     nombre:'Bello',
    //     lont:'-75.55',
    //     lat:'6.333'
    //   },
    //   {
    //     nombre:'Envigado',
    //     lont:'-75.6',
    //     lat:'6.15'
    //   },
    //   {
    //     nombre:'Estrella',
    //     lont:'-75.633',
    //     lat:'6.15'
    //   }
    // ];
    console.log(this.data);
  }
 
}
