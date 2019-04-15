import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthService} from '@app/services/auth.service';
import {Observable, of} from 'rxjs';
import * as fromAuth from '@app/store/actions/auth.action';
import {AuthActionTypes, LoginUser, RegisterUser, SetCurrentUser, SetInitialUser} from '@app/store/actions/auth.action';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {User} from '@app/models/user';
import {Action, Store} from '@ngrx/store';
import * as fromError from '@app/store/actions/errors.action';
import {RemoveError} from '@app/store/actions/errors.action';
import {AppState} from '@app/store/app-store.module';


@Injectable()
export class AuthEffects {

  constructor(private action$: Actions,
              private authService: AuthService,
              private store: Store<AppState>) {
  }

  @Effect()
  setInitialUser$: Observable<Action> = this.action$.pipe(
    ofType<SetInitialUser>(AuthActionTypes.SET_INITIAL_USER),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap((action: SetInitialUser) => this.authService.whoami().pipe(
      map((user: User) => new SetCurrentUser(user)),
      catchError(err => {
        this.store.dispatch(new fromAuth.SetCurrentUser(null));
        this.authService.token = null;
        return of(new fromError.AddError(err.error));
      })
      )
    )
  );

  @Effect()
  loginUser$: Observable<Action> = this.action$.pipe(
    ofType<LoginUser>(AuthActionTypes.LOGIN_USER),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap((action: LoginUser) => this.authService.login(action.payload).pipe(
      map((user: User) => new SetCurrentUser(user)),
      catchError(err => {
        this.store.dispatch(new fromAuth.SetCurrentUser(null));
        this.authService.token = null;
        return of(new fromError.AddError(err.error));
      })
    ))
  );

  @Effect()
  registerUser$: Observable<Action> = this.action$.pipe(
    ofType<RegisterUser>(AuthActionTypes.REGISTER_USER),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap((action: RegisterUser) => this.authService.register(action.payload).pipe(
      map((user: User) => new SetCurrentUser(user)),
      catchError(err => {
        this.store.dispatch(new fromAuth.SetCurrentUser(null));
        this.authService.token = null;
        return of(new fromError.AddError(err.error));
      })
    ))
  );
}
