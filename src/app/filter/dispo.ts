import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name:'dispo'})
export class dispo implements PipeTransform{
  transform(value: Number, ...args: any[]): any {
      if (value>5) return "./assets/ressources/vert.png";
      if (value<=2) return "./assets/ressources/rouge.png";
      return "./assets/ressources/orange.png";
  }

}
