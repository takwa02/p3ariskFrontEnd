import { Pipe, PipeTransform } from '@angular/core';
import { CritereVerification } from './model/CritereVerification';

@Pipe({
  name: 'myFilterPipe',
  pure: false

})
export class MyFilterPipePipe implements PipeTransform {
  transform(items: Set<any>,args:string): any {
  
    var array = Array.from(items);

   var arr= array.filter(item =>(item.totalScore>args));

    var set = new Set(arr);

    return set;

}
}
