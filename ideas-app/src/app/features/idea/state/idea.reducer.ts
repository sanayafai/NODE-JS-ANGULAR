import {IdeaState} from '@app/features/idea/state/index';
import {Action, IdeaActions} from '@app/features/idea/state/idea.action';


const initialState: IdeaState = {
  ideas: {},
  loading: false,
  loaded: false
};


export const ideaReducer: (state: IdeaState, action: Action) => IdeaState = (state = initialState,
                                                                             action) => {
  switch (action.type) {

    case IdeaActions.LOAD_IDEAS:
      return {...state, loaded: false, loading: true};

    case  IdeaActions.CREATE_IDEA:
      return {...state, loaded: false, loading: true};

    case  IdeaActions.UPDATE_IDEA:
      return {...state, loaded: false, loading: true};

    case  IdeaActions.DELETE_IDEA:
      return {...state, loaded: false, loading: true};

    case IdeaActions.LOAD_IDEAS_SUCCESS:
      const ideas = action.payload.reduce(
        (acc, idea) => ({
          ...acc,
          [idea.id]: idea
        }), state.ideas);
      return {...state, ideas, loaded: true, loading: false};


    default:
      return state;

  }
};
