import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

@NgModule({
    imports: [
        StoreModule.forRoot([], { initialState: [], metaReducers: [] })
    ],
    exports: [
    ]
})
export class RootStoreModule { }