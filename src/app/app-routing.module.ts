import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';

  const routes: Routes = [
  {path:"product", component:ProduitComponent},
  {path:"dashboard", component:DashboardComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
