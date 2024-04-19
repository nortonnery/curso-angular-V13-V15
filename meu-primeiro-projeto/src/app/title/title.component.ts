import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit,OnChanges,OnDestroy{

  @Input() public title:string = "Bem Vindo";
  constructor(){}
  ngOnDestroy(): void {
    console.log("Deu bom ele foi destruido");
  }
  ngOnChanges(): void {
  }

  ngOnInit(): void {
  }
}
