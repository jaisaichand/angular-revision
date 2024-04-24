import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeadSubService {

  constructor() { }

  nameOfHead = "Aniruddho";

  changeDec = new Subject();
}
