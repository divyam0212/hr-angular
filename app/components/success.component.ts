import { Component } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:"success",
    templateUrl:"./success.component.html",
    styleUrls:['../app.component.css'],
})

export class SuccessComponent{
    private username:string;
    constructor(private router:Router,private route:ActivatedRoute){
    }

    ngOnInit(){
        this.username=this.route.snapshot.paramMap.get('emailId');
    }

    logout(){
        alert("LOGGING OUT...");
        this.router.navigate(['/login']);
    }
}