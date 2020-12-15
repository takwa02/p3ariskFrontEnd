import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public  form: any = {};
 public  isLoggedIn:boolean = false;
  public isLoginFailed = false;
 public  errorMessage = '';
  public roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router:Router) {

   }

  ngOnInit() {
   
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.tokenStorage.setLoggedIn(true);
      this.roles = this.tokenStorage.getUser().roles;
    }
    console.log("data=>"+this.isLoggedIn);
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        console.log("data=>"+data);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.tokenStorage.setLoggedIn(true);
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
  this.router.navigate(['home'])
  }
}
