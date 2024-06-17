import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from "./component/login/login.component";
import {DatatableComponent} from "./component/datatable/datatable.component";
import {AuthGuard} from "./service/auth-guard.service";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'receitas', component: DatatableComponent,/* canActivate: [AuthGuard]*/ },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
