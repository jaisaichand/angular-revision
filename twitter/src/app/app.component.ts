import { Component } from '@angular/core';
import { HeadSubService } from './head-sub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter';

  counter:number = 1;

  constructor(private someSer:HeadSubService){
    // setInterval(() => this.counter++,1000);
  }

  nameInput:string="";

  names=['fgh','sfdg','dsfg']

  changeHandler(eve:string){
    this.someSer.nameOfHead = this.someSer.nameOfHead+'-'+eve;
    this.someSer.changeDec.next(this.someSer.nameOfHead);
    if(eve=='inc'){
      this.counter++;
    }else{
      this.counter--;
    }
  }
}
