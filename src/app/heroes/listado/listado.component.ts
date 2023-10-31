import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ["Ironman", "Spiderman", "Hulk", "Thor", "Captain America"];
  heroe_borrado: string = '';
  
  borrarHeroe(): void{
    this.heroe_borrado = this.heroes.shift() || '';
  } 
}
