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
        userPassw: [""],
        userEmail: [""],
        userName: [""]
      });
    }
  userLogin!: string;
  userPassw!: string; 
  userEmail!:string;
  userInfo: any
  userName!: string;

  data!:string
  onSubmit() {
    const url ='https://api.nancydrew.me/addUser?key=X9ZO2Lqf&login='+this.userLogin +'&password='+this.userPassw+'&name='+this.userName+'&email='+this.userEmail
    this.httpClient.get(url).subscribe((data:any)=>{
      this.userLogin = data
      this.userPassw = data
      this.userName = data
      this.userEmail = data
    })
  }

  goForm() {
    this.router.navigate(['/signIn']);
  }
}
