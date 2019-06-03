import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { IConfig } from '../models/config.interface';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    configUrl = `${environment.apiUrl}config.json`;

    private config: IConfig = {
        adminName: "System Administrator",
        permissions: [
            "users"
        ]
    };

    constructor(private _http: HttpClient) { }

    getConfig(): Observable<IConfig> {
        // return this._http.get<IConfig>(this.configUrl);
        return of(this.config);
    }
}
