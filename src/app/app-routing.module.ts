import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivreComponent } from './livre/livre.component';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';
const routes: Routes = [
  {path: "livre", component :LivreComponent},
  {path: "add-livre", component: AddLivreComponent},
  { path: "", redirectTo: "livre", pathMatch: "full" },
  {path: "updatelivre/:id",component: UpdateLivreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
