import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { PageNonTrouverComponent } from './page-non-trouver/page-non-trouver.component';
import { AjouterComponent } from './ajouter/ajouter.component';

const routes: Routes = [
  {path: "", component: ListeComponent},
  {path: "details/:id", component: DetailsComponent},
  {path: "liste", redirectTo: ""},
  {path: "ajouter", component: AjouterComponent},
  {path: "**", component: PageNonTrouverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
