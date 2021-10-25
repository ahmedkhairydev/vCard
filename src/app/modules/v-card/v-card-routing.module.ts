import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VCardComponent } from './pages/v-card/v-card.component';

const routes: Routes = [
  {
    path: '',
    component: VCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VCardRoutingModule { }
