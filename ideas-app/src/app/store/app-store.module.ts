import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import * as fromRouter from '@ngrx/router-store';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';

import {errorReducer, ErrorState} from '@app/store/reducers/errors.reducer';
import {AuthEffects} from '@app/store/effects/auth.effects';
import {authReducer, AuthState} from '@app/store/reducers/auth.reducer';
import {CustomerSerializer, RouterStateUrl} from '@app/store/reducers/router.reducer';


export interface AppState {
  error: ErrorState;
  auth: AuthState;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  error: errorReducer,
  auth: authReducer,
  router: fromRouter.routerReducer
};

export const effects = [
  AuthEffects

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule
  ],
  providers: [{
    provide: RouterStateSerializer, useClass: CustomerSerializer
  }]
})
export class AppStoreModule {
}
