import {createReducer, on} from '@ngrx/store';
import {add, clear, remove, updateAllState} from '../action/app.action';
import {AppState} from '../app.state';

export const initialState: AppState = {
  ids: [],
};

export const favoriteReducer = createReducer(
  initialState,

  on(add, (state, {id}) => (
      {
        ...state,
        ids: [...state.ids, id]
      }
    )
  ),

  on(remove, (state, {id}) => ({
    ...state,
    ids: state.ids.filter((value) => value != id)
  })),

  on(updateAllState, (state, {ids}) => (
      {
        ...state,
        ids
      }
    )
  ),

  on(clear, () => initialState)
);
