import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgendamentoComponent} from "./pages/agendamento/agendamento.component";

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'agendamentos'},
  { path:'agendamentos', component: AgendamentoComponent},
  { path:'content', component: AgendamentoComponent},
  { path:'analytics', component: AgendamentoComponent},
  { path:'comments', component: AgendamentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
