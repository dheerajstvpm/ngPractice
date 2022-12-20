import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USD2INR'
})
export class USD2INRPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [price,a,b]=args
    return value*price*a*b;
  }

}
