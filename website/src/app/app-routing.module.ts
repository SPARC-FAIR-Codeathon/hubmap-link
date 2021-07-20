import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsctbCompareComponent } from './components/asctb-compare/asctb-compare.component';
import { AsctbGenerateComponent } from './components/asctb-generate/asctb-generate.component';

const routes: Routes = [
  { path: 'asctb-compare', component: AsctbCompareComponent },
  { path: 'asctb-generate', component: AsctbGenerateComponent },
  { path: '**', component: AsctbCompareComponent } //default
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
