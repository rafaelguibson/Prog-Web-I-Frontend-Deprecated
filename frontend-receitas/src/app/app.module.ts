import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from "ngx-mask";
import {HttpClientModule} from "@angular/common/http";
import { ReceitaHttpclienteService} from "./service/receita-httpcliente.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './menu/navbar/navbar.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import { DatatableComponent } from './component/datatable/datatable.component';
import { RegisterDialogComponent } from './component/register-dialog/register-dialog.component';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTooltip} from "@angular/material/tooltip";
import { DialogDeleteComponent } from './component/dialog-delete/dialog-delete.component';
import {MatDialogClose} from "@angular/material/dialog";
import { DialogSucessComponent } from './component/dialog-sucess/dialog-sucess.component';
import { DialogUpdateComponent } from './component/dialog-update/dialog-update.component';
import { LoginComponent } from './component/login/login.component';
import {MatDrawer, MatDrawerContainer, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatSidenav} from "@angular/material/sidenav";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatatableComponent,
    RegisterDialogComponent,
    DialogDeleteComponent,
    DialogSucessComponent,
    DialogUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbar,
    MatButton,
    MatIcon,
    MatIconButton,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatTable,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatCardActions,
    MatLabel,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatTooltip,
    MatAnchor,
    MatDialogClose,
    MatDrawerContainer,
    MatDrawer,
    MatNavList,
    MatListItem,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: `pt-BR`},
    provideAnimationsAsync(),
    provideNgxMask(),
    ReceitaHttpclienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
