import { Component } from "@angular/core";
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HackerService } from './services/hackerrank.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector:"login",
    templateUrl:"./login.component.html",
    styleUrls:['../app.component.css'],
})

export class LoginComponent{
    flag:any;
    //visibility:boolean=false;

    constructor(private router:Router,private _service:HackerService){
    }

    emailId=new FormControl('');
    password=new FormControl('');

    clickme(){
        console.log("you clicked me");
        alert("Email ID: "+this.emailId.value);
        alert("Password: "+this.password.value);
        /* this.print(); */
        var user={
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
    
        console.log(this.flag);
        if(this.flag){
            alert("WELCOME USER");
            this.router.navigate(['/success',this.emailId.value]);
        }
        //this.visibility=false; 
    }
}