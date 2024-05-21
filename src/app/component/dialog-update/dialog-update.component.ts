import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ReceitaHttpclienteService} from "../../service/receita-httpcliente.service";
import {Receita} from "../../models/receita";

@Component({
  selector: 'app-dialog-update',
  templateUrl: './dialog-update.component.html',
  styleUrl: './dialog-update.component.css'
})
export class DialogUpdateComponent {
  constructor(public dialogRef: MatDialogRef<DialogUpdateComponent>,
              private httpService : ReceitaHttpclienteService,
              @Inject(MAT_DIALOG_DATA) public data: { receita: Receita },) {}

  fecharModal() {
    this.dialogRef.close();
  }
}
