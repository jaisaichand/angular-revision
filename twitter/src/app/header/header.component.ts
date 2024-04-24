import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeadSubService } from '../head-sub.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private subClass:HeadSubService) { }

  ngOnInit(): void {
    this.subClass.changeDec.subscribe((eve:any)=>{
      console.log('event is',eve);
      this.nameOfHead = eve;
    })
  }

  nameOfHead = this.subClass.nameOfHead;

  @Input("counter") counterChild = 0;
  @Output() changeCounterEmitter = new EventEmitter<any>();

  changeCounter(str:string){
    this.changeCounterEmitter.emit(str);
  }

}
