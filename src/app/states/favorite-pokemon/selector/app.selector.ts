import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../app.state';

// Get complete state of the favorites products in application
export const selectAppState = createFeatureSelector<AppState>('favorite');

// get All favorites products
export const selectItemns = createSelector(
  selectAppState,
  (state: AppState) => state.ids
);

// get One favorite product by ID from AppState
export const selectById = createSelector(
  selectAppState,
  (state: AppState, props: { id: string }) => state.ids.find(id => id === props.id)
);

// get One favorite product by ID from selectItemns
export const selectItemById = createSelector(
  selectItemns,
  (items: string[], props: { id: string }) => {
    return items.find(id => id === props.id)
  }
);
