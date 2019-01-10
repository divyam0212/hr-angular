import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable()
export class HackerService{
    constructor(private _http:HttpClient){

    }

    saveUser(user):any{
        return this._http.post("http://localhost:1111/saveuser",user);
    }

    fetchAllUsers():any{
        return this._http.get("http://localhost:1111/all");
    }

    checkUser(user):any{
        return this._http.get("http://localhost:1111/checkUser",user);
    }
}

