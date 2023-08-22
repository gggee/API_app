import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServService } from '../api-serv.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  form !: FormGroup
  constructor(
    private router: Router, 
    private api_serv: ApiServService, 
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
    ){
      this.form= this.formBuilder.group({
        userLogin: [""],
        userPassw: [""]
      });
    }

  userLogin!: string;
  userPassw!: string;
  userEmail!: string;
  userName!: string;

  info!: object;
  data !: string;
  
  //private url = 'https://api.nancydrew.me/authUser?key=X9ZO2Lqf&login='+this.userLogin +'&password='+this.userPassw

  onSubmit() {
    this.httpClient.get('https://api.nancydrew.me/authUser?key=X9ZO2Lqf&login='+this.userLogin +'&password='+this.userPassw).subscribe(
      (responce)=> this.data = JSON.stringify(responce)
    )
  }
}
