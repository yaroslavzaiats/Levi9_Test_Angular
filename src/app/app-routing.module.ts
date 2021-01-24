import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivatedLayoutComponent } from './activated-layout/activated-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';


const routes: Routes = [
  {path: '', component: MainLayoutComponent},
  {path: 'activated', component: ActivatedLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
