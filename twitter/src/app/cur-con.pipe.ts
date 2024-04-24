import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'curCon'
})
export class CurConPipe implements PipeTransform {
  translateDict:any = {"hello":"entra"}

    transform(value: string): string {
      return this.translateDict[value];
    }
  

}
