import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiKeyComponent } from './components/api-key/api-key.component';
import { AsctbCompareComponent } from './components/asctb-compare/asctb-compare.component';
import { AsctbGenerateComponent } from './components/asctb-generate/asctb-generate.component';
import { DatasetLinkagesComponent } from './components/dataset-linkages/dataset-linkages.component';

const routes: Routes = [
  { path: 'asctb-compare', component: AsctbCompareComponent },
  { path: 'asctb-generate', component: AsctbGenerateComponent },
  { path: 'dataset-linkage', component: DatasetLinkagesComponent },
  { path: '**', component: ApiKeyComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
