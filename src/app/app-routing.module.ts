import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponentsListComponent} from './components/components.component';

const routes: Routes = [
  {path: '', component: ComponentsListComponent},
  {path: 'components', component: ComponentsListComponent},
  {path: 'assignments', component: ComponentsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
