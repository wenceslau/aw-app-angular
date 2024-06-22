import {createAction, props} from '@ngrx/store';

export const add = createAction('[FavoritePokemon] Add', props<{ id: string }>());
export const remove = createAction('[FavoritePokemon] Remove', props<{ id: string }>());
export const updateAllState = createAction('[FavoritePokemon] Update all state ', props<{ ids: string[] }>());
export const clear = createAction('[FavoritePokemon] Clear');
