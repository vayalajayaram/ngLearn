import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[],filterString: string,proName:string):any[] {
    const result: any = [];
    if(!value ||  filterString === '' || proName === ''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[proName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
