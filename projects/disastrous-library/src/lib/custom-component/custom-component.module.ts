import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponentComponent } from './components/custom-component/custom-component.component';
import { EffectsModule } from '@ngrx/effects';
import { CustomComponentEffects } from './effects/custom-component.effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/custom-component.reducer';

@NgModule({
    declarations: [CustomComponentComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature('custom-reducers', reducer),
        EffectsModule.forFeature([CustomComponentEffects])
    ],
    exports: [CustomComponentComponent]
})
export class CustomComponentModule { }
