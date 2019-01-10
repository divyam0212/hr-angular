import { Component } from '@angular/core';

@Component({
    selector:"home",
    templateUrl:"./home.component.html",
    styleUrls:['../app.component.css'],
})

export class HomeComponent{
    public login:boolean=false;
  
    onLoginClick(){
    }
    onSignClick(){
        this.login=false;
    }
    ngOnInit(){
        this.login=true;
    }
}