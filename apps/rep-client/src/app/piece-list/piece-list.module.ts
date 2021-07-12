import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieceListComponent } from './piece-list.component';
import { PieceListRoutingModule } from './piece-list.routing';

@NgModule({
  imports: [
    CommonModule,
    PieceListRoutingModule
  ],
  declarations: [PieceListComponent]
})
export class PieceListModule { }
