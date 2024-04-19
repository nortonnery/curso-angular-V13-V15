import { PokeApiService } from './../../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poket-list',
  templateUrl: './poket-list.component.html',
  styleUrls: ['./poket-list.component.scss']
})
export class PoketListComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false;

  constructor(
    private PokeApiService: PokeApiService
  ){}

  ngOnInit(): void {
    this.PokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons =  this.setAllPokemons;
       },
       error =>{
        this.apiError = true;
       }
    );
  }

  public getSearch(value:string){
   const filter = this.setAllPokemons.filter((res: any) =>{
    return !res.name.indexOf(value.toLocaleLowerCase());
   });

   this.getAllPokemons = filter;
  }
}
