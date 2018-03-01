import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let imageUrl: string;
    switch (true){
      case value <= 0: imageUrl = "./assets/imgs/red_bullet.png"; break;
      case value > 0 && value < 5: imageUrl = "./assets/imgs/yellow_bullet.png"; break;
      default: imageUrl = "./assets/imgs/green_bullet.png"; break;
    }
    return imageUrl;
  }

}
