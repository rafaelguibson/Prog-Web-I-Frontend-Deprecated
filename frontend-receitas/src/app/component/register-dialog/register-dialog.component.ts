import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Receita} from "../../models/receita";
import {FormBuilder, FormGroup, UntypedFormGroup, Validators} from "@angular/forms";
import {ReceitaHttpclienteService} from "../../service/receita-httpcliente.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrl: './register-dialog.component.css'
})
export class RegisterDialogComponent implements OnInit{
  receitasForm!: FormGroup;
  form!: UntypedFormGroup;
  showFeedbackPanel: boolean = false;
  isUpdate: boolean = false;
  errorMensagem: string = '';
  constructor(
    public dialogRef: MatDialogRef<RegisterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Receita,
    private formBuilder: FormBuilder,
    private receitaService: ReceitaHttpclienteService
  ) {
    if(this.data) {
      this.isUpdate = true;
    }
  }

  ngOnInit() {
    this.receitasForm = this.formBuilder.group({
      id: [''],
      nome: [''],
      ingredientes: ['', [Validators.required]],
      modoPreparo: ['', [Validators.required]],
      tempoPreparo: ['', [Validators.required]],
      rendimento: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
    });

    if(this.data != null) {
      this.receitasForm.patchValue(this.data)
    }
  }

  onSubmit(): void {
    if (this.receitasForm.valid) {
      const receita: Receita = this.receitasForm.value;
      this.receitaService.salvar(receita).subscribe({
        next: (result) => {
          this.receitaService.listarTodos();
          this.receitasForm.reset();
          this.fecharModal();
        },
        error: (err) => {
          this.showErrorMensage(err.error);
        }
      });
    }
  }

  onUpdate(): void {
    if (this.receitasForm.valid) {
      const receita: Receita = this.receitasForm.value;
      this.receitaService.atualizar(receita.id, receita).subscribe({
        next: (result) => {
          this.receitaService.listarTodos();
          this.receitasForm.reset();
          this.fecharModal();
        },
        error: (err) => {
          this.showErrorMensage(err.error);
        }
      });
    }
  }
  showErrorMensage(msg: string ) {
    this.errorMensagem = msg ;
    this.showFeedbackPanel = true;
    this.scheduleMessageClear();
  }

  // Função para agendar a limpeza da mensagem após 10 segundos
  private scheduleMessageClear() {
    setTimeout(() => {
      this.errorMensagem = ''; // Limpar a mensagem após 5 segundos
      this.showFeedbackPanel = false;
    }, 5000); // 5000 milissegundos = 5 segundos
  }

  onCancel(): void {
    this.receitasForm.reset();
  }


  fecharModal(): void {
    this.dialogRef.close();
  }
}
