import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, pipe, tap} from "rxjs";
import {LoginResponse} from "../models/user";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationHttpclientServiceService {
  apiUrl: string = "http://localhost:8080/auth";

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/login", { email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    )
  }
}
