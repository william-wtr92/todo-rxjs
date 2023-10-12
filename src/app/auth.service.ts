import { Injectable } from '@angular/core';
import {delay, Observable, of, tap} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: boolean = false;

  constructor() { }

  logIn(name: string, pwd: string): Observable<boolean>{
    const isLogged = (name == environment.name && pwd == environment.pwd);

    return of(isLogged).pipe(
      delay(1000),
      tap(isLogged => this.isLogged = isLogged)
    );

  }

  logOut(): void{
    this.isLogged = false;
  }

}
