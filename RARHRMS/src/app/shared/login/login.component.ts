import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Ilogin } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  SIGNIN = {} as Ilogin;
  visible:boolean = false;
  changetype:boolean =true;
  subscription!: Subscription;
  constructor(private _httpservice:HttpService,
    private router:Router,
) { }


viewpass(){
  this.visible = !this.visible;
  this.changetype = !this.changetype;
}
  ngOnInit(): void {
  }
  login(f:NgForm){

  }

}
