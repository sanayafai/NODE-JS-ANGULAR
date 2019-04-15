import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {Action, Store} from '@ngrx/store';

import {AppState} from '@app/features/user/state';
import {IdeaActions, LoadIdeas, LoadIdeaSuccess} from '@app/features/idea/state/idea.action';
import {AddError, RemoveError} from '@app/store/actions/errors.action';
import {ApiService} from '@app/services/api.service';

@Injectable()
export class IdeaEffect {

  constructor(private action$: Actions,
              private store: Store<AppState>,
              private api: ApiService) {
  }


  @Effect()
  loadIdea$: Observable<Action> = this.action$.pipe(
    ofType<LoadIdeas>(IdeaActions.LOAD_IDEAS),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.api.getIdeas().pipe(map(ideas => new LoadIdeaSuccess(ideas)),
        catchError(err => of(new AddError(err.error))))
    )
  );

}
