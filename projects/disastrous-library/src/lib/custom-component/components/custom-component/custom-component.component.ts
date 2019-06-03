import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DoThisAction, DoThatAction } from '../../actions/custom-component.actions';
import { RootState } from '../../../root-store/states/root-state';

@Component({
    selector: 'lib-custom-component',
    templateUrl: './custom-component.component.html',
    styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent implements OnInit {

    constructor(private readonly _store: Store<RootState>) { }

    ngOnInit() {
    }

    public doThis(): void {
        this._store.dispatch(new DoThisAction("SOME STRING :)"));
    }

    public doThat(): void {
        this._store.dispatch(new DoThatAction());
    }
}
