import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreEffects } from '@core/store/core.effects';
import { reducers } from '@core/store/core.reducers';
import { CORE_FEATURE_NAME } from '@core/store/core.state';

@NgModule({
    imports: [
        HttpClientModule,
        StoreModule.forFeature(CORE_FEATURE_NAME, reducers),
        EffectsModule.forFeature([CoreEffects]),
        RouterModule.forChild([]),
    ],
    exports: [RouterModule],
})
export class CoreModule {

    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [],
        };
    }
}