import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h2>{{title}}</h2>
        <h3>La base es: {{base}}</h3>
        <button (click)="acumular(base)">+{{base}}</button>
        <span> {{ contador }} </span>
        <button *ngIf="contador>0" (click)="acumular(-base)">-{{base}}</button>
    `
})
export class ContadorComponent{
    title: string = 'Contador App';
    contador: number = 0;
    base: number = 5;

    acumular(valor:number):void{
    this.contador+=valor;
    }
}