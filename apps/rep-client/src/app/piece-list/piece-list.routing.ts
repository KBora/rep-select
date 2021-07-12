import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PieceListComponent } from './piece-list.component';

const routes: Routes = [
  { path: '', component: PieceListComponent }
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PieceListRoutingModule {}
