import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './cliente/edit/edit.component';
import { ListarComponent } from './cliente/listar/listar.component';
import { NovoComponent } from './cliente/novo/novo.component';

const routes: Routes = [
 {path:'listar', component:ListarComponent},
 {path:'novo', component: NovoComponent},
 {path: 'Edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
