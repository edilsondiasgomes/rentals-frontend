declare var google: any;

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { UserService } from 'src/app/core/services/user.service';
import { Login } from 'src/app/shared/models/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public login!: Login
  private readonly GOOGLE_CLIENT_ID = '624806720637-hfgeug0a0686e2creernj6plk3oiv2kc.apps.googleusercontent.com'

  constructor(private loginService: LoginService, private router: Router, private userService: UserService) {
    this.login = {} as Login;
  }

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: this.GOOGLE_CLIENT_ID,
      callback: (resp: any) => {
        this.userService.saveToken(resp.credential)
        this.userService.getUser().subscribe(user => console.log(user)
        )
      }
    });

    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_white',
      size: 'large',
      shape: 'rectangle',
      width: '300px',

    })
  }

  doLogin() {
    this.loginService.doLogin();
    this.router.navigateByUrl('/')
    this.userService.getUser().subscribe(user => console.log(user));
  }

  goToRegistration() {
    this.router.navigateByUrl('/registration')
  }

}
