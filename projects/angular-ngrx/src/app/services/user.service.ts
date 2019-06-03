import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';
import { IUserHttp } from '../models/http-models/user-http.interface';

@Injectable()
export class UserService {
    usersUrl = `${environment.apiUrl}users.json`;

    private userList: IUserHttp = {
        users: [
            {
                id: 1,
                name: "Luis Suarez",
                cardNumber: "XXXX-XXXX-XXXX-4321",
                cardType: "Visa"
            },
            {
                id: 2,
                name: "Lucas Torreira",
                cardNumber: "XXXX-XXXX-XXXX-1369",
                cardType: "Master"
            },
            {
                id: 3,
                name: "Edison Cavani",
                cardNumber: "XXXX-XXXX-XXXX-8888",
                cardType: "Visa"
            }
        ]
    };

    constructor(private _http: HttpClient) { }

    getUsers(): Observable<IUserHttp> {
        // return this._http.get<IUserHttp>(this.usersUrl);

        return of(this.userList);
    }
}
