import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: []
})
export class AuthComponent implements OnInit{
  public error: string;
  public name: string;
  public pwd: string;
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  logIn(){
    this.authService.logIn(this.name, this.pwd).subscribe((isLogged: boolean) => {
      this.setError();
      if(isLogged){
        this.router.navigate(["/tasks"]);
      }else{
        this.pwd = "";
      }
    });
  }

  setError():void {
    if(!this.authService.isLogged){
      this.error = "Incorrect username or password !";
    }
  }
}
