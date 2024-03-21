import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args: any): any {
    
    if(!args){
      return value;
    }
    return value.filter((item: { RollNo: any; FirstName: any; LastName: any; status: any;})=> item.RollNo.toLowerCase().indexOf(args.toLowerCase()) > -1||
                              item.FirstName.toLowerCase().indexOf(args.toLowerCase()) > -1||
                              item.LastName.toLowerCase().indexOf(args.toLowerCase()) > -1||
                              item.status.toLowerCase().indexOf(args.toLowerCase()) > -1
                              );
  }
 
}
