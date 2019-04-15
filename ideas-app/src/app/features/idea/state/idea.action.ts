import {Action} from '@ngrx/store';
import {Idea, IdeaDTO} from '@app/models/idea';

export enum IdeaActions {
  LOAD_IDEAS = '[IDEA] Load ideas',
  LOAD_IDEAS_SUCCESS = '[IDEA] Load ideas success',

  CREATE_IDEA = '[IDEA] Create Idea',
  CREATE_IDEA_SUCCESS = '[IDEA] Create Idea success',

  UPDATE_IDEA = '[IDEA] Update Idea',
  UPDATE_IDEA_SUCCESS = '[IDEA] Update Idea success',

  DELETE_IDEA = '[IDEA] Delete Idea',
  DELETE_IDEA_SUCCESS = '[IDEA] Delete Idea success'
}


export class LoadIdeas implements Action {

  readonly type = IdeaActions.LOAD_IDEAS;

  constructor() {
  }
}

export class LoadIdeaSuccess implements Action {

  readonly type = IdeaActions.LOAD_IDEAS_SUCCESS;

  constructor(public payload: Idea[]) {
  }
}

export class CreateIdea implements Action {

  readonly type = IdeaActions.CREATE_IDEA;

  constructor(public payload: IdeaDTO) {
  }
}

export class CreateIdeaSuccess implements Action {

  readonly type = IdeaActions.CREATE_IDEA_SUCCESS;

  constructor(public payload: Idea) {
  }
}


export class UpdateIdea implements Action {

  readonly type = IdeaActions.UPDATE_IDEA;

  constructor(public payload: IdeaDTO) {
  }
}

export class UpdateIdeaSuccess implements Action {

  readonly type = IdeaActions.UPDATE_IDEA_SUCCESS;

  constructor(public payload: Idea) {
  }
}

export class DeleteIdea implements Action {

  readonly type = IdeaActions.DELETE_IDEA;

  constructor(public payload: string) {
  }
}

export class DeleteIdeaSuccess implements Action {

  readonly type = IdeaActions.DELETE_IDEA_SUCCESS;

  constructor(public payload: string) {
  }
}


export type  Action =
  LoadIdeas
  | LoadIdeaSuccess
  | CreateIdea
  | CreateIdeaSuccess
  | UpdateIdea
  | UpdateIdeaSuccess
  | DeleteIdea
  | DeleteIdeaSuccess;
