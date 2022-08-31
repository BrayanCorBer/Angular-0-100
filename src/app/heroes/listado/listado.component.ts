import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes : string[] = ['Spiderman', ' Ironman', 'hulk', 'thor', 'Capitán América'];

  heroeBorrado : string = ''

  borrarHeroe(){
   this.heroeBorrado = this.heroes.shift() || '';
  }

  getHeroeBorrado(){
    return this.borrarHeroe()
  }

}