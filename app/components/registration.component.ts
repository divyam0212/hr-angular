import { Component } from "@angular/core";
import { HackerService } from './services/hackerrank.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector:"registration",
    templateUrl:"./registration.component.html",
    styleUrls:['../app.component.css'],
})

export class RegistrationComponent{
    user:any;
    flag:boolean=false;
    constructor(private _service:HackerService,private router:Router){

    }
    userName=new FormControl('');
    emailId=new FormControl('');
    password=new FormControl('');

    register(){
        var user={
            "userName":this.userName.value,
            "emailId":this.emailId.value,
            "password":this.password.value
        };
        this.flag=this._service.checkUser(user).subscribe(
            (res)=>{
                console.log(res+" Success ");
                /* this.check=res; */
                /* console.log(this.userData); */
            },(error:HttpErrorResponse)=>{
                console.log(error+" Failure ");
                if(error instanceof Error){
                    console.log("Client side error "+error);
                }
                else
                {
                    console.log("Server side error "+error);
                }
            }
        );
        if(this.flag){
            alert("User already exists!!!");
            this.router.navigate(['/register']);
        }
        else{
            this._service.saveUser(user).subscribe(
                (res)=>{
                    console.log(res+" Successfully Registered!!!");
                    alert("Registered");
                    this.userName=new FormControl('');
                    this.emailId=new FormControl('');
                    this.password=new FormControl('');
                },(error:HttpErrorResponse)=>{
                    if(error instanceof Error){
                        console.log("Client side error"+error.status);
                        console.log("Client side error"+error.statusText);
                    }
                    else{
                        console.log("Server side error"+error.status);
                        console.log("Server side error"+error.statusText);
                    }
                }
            );
        }
        
    }
}