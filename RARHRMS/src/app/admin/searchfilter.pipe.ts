import { Pipe, PipeTransform } from '@angular/core';
import { IActive } from './activeemployeedata/activeemployeedata';


@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(actemployees: IActive[], searchValue: any): IActive[] {
    if(!actemployees || !searchValue){
       return actemployees;
    }
    return actemployees.filter(p => 
      p.FirstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      p.emailaddress.toLowerCase().includes(searchValue.toLowerCase()) ||
      p.ReportingTo.toLowerCase().includes(searchValue.toLowerCase()) ||
      p.contactnumber.toString().toLowerCase().includes(searchValue.toLowerCase()))
      
 

}

}
