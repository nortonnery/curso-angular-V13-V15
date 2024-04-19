import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { PokeHeaderComponent } from './shared/poke-header/poke-header.component';
import { PokeSearchComponent } from './shared/poke-search/poke-search.component';
import { PoketListComponent } from './shared/poket-list/poket-list.component';


@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PoketListComponent
  ],
  exports:[
   PokeHeaderComponent,
   PokeSearchComponent,
   PoketListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
