import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit{

  public nome:string="Dener";
  public idade: number= 29;
  public maisUm: number= 1;

  public checkedDisabled: boolean=true;
  public imgSrc: string = "https://img.wallpapic.it/i3218-149-723/medium/spazio-luna-astronomia-universo-sfondo.jpg";
  public imgTitle: string="Property Binding";

  public position: {x:number,y:number} = {x:0,y:0}

  constructor(){}
  ngOnInit(): void { }

  public alertaInfo(valor:MouseEvent) {
   console.log(valor);
  }

  public mouseMoveTeste(valor:MouseEvent){

    const newLocal = this;
    newLocal.position.x = valor.offsetX;
    const newLocal_1 = this;
    newLocal_1.position.y = valor.offsetY;
  }
}
