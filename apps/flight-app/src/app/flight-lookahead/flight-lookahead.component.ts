import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';
import { Flight } from '@flight-workspace/flight-lib';

@Component({
    selector: 'flight-lookahead',
    templateUrl: './flight-lookahead.component.html'
})

export class FlightLookaheadComponent {

    control: FormControl;
    flights$: Observable<Flight[]>;
    loading = false;

    constructor(private http: HttpClient) {
        this.control = new FormControl();

        this.flights$ = this
            .control
            .valueChanges
            .pipe(
                filter(v => v.length > 3),
                debounceTime(300), 
                distinctUntilChanged(),
                tap(() => this.loading = true),
                switchMap(name => this.load(name)),
                tap(() => this.loading = false)
            );
    }

    load(from: string)  {
        const url = "http://www.angular.at/api/flight";

        const params = new HttpParams()
                            .set('from', from);

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        return this.http.get<Flight[]>(url, {params, headers});

    };


}
