import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class MapService {
    constructor (private httpClient: HttpClient){

    }

    getMap(){
        return this.httpClient
        .jsonp(
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyDFaXNvUSNlqQoqlNBgCgppWcSeYxb5kDM',
          'callback'
        )
        .pipe(
          map(() => true),
          catchError(() => of(false))
        );
    }
}