import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedialContentModule } from './medial-content/medial-content.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => 
      import('./home/home.module').then((m) => m.HomeModule)
  },  
  {
    path: 'sales',
    loadChildren: () => 
      import('./sales/sales.module').then((m) => m.SalesModule)
  },  
  {
    path: 'medial-content',
    loadChildren: () => 
      import('./medial-content/medial-content.module').then((m) => m.MedialContentModule)
  },  
  {
    path: 'buy',
    loadChildren: () => 
      import('./buy/buy.module').then((m) => m.BuyModule)
  },  
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
