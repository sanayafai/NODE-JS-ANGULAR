import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';

import {LoadUsers, LoadUsersSuccess, UserActions} from '@app/features/user/state/user.action';
import {AddError, RemoveError} from '@app/store/actions/errors.action';
import {AppState} from '@app/features/user/state/index';
import {ApiService} from '@app/services/api.service';

@Injectable()
export class UserEffect {

  constructor(private action$: Actions,
              private store: Store<AppState>,
              private api: ApiService) {
  }

  @Effect()
  loadUsers$: Observable<Action> = this.action$.pipe(
    ofType<LoadUsers>(UserActions.LOAD_USERS),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.api.getUsers().pipe(
        map(users => new LoadUsersSuccess(users)),
        catchError(err => of(new AddError(err.error)))
      )
    )
  );


}
