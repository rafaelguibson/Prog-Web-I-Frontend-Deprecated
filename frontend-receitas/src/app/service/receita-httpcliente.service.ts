import { Injectable } from '@angular/core';
import {Receita} from "../models/receita";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ReceitaHttpclienteService {

  private baseUrl = 'http://localhost:8080/api/receitas';

  constructor(private http: HttpClient) { }

  salvar(receitaDTO: Receita): Observable<Receita> {
    return this.http.post<Receita>(this.baseUrl, receitaDTO);
  }

  atualizar(id: number, receitaDTO: Receita): Observable<Receita> {
    return this.http.put<Receita>(`${this.baseUrl}/${id}`, receitaDTO);
  }

  buscarPorId(id: number): Observable<Receita> {
    return this.http.get<Receita>(`${this.baseUrl}/${id}`);
  }

  listarTodos(): Observable<Receita[]> {
    // const tokenString = localStorage.getItem('auth-token');
    // let token: { accessToken: string } = { accessToken: '' };
    //
    // if (tokenString) {
    //   token = JSON.parse(tokenString);
    //   console.log(token);
    // }

    const headers = {
      'Authorization': 'Bearer ' + localStorage.getItem('auth-token')
    };

    return this.http.get<Receita[]>(this.baseUrl, { headers });
  }


  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
