import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../states/favorite-pokemon/app.state';
import {add, remove, updateAllState} from '../states/favorite-pokemon/action/app.action';
import {selectById, selectItemById, selectItemns} from '../states/favorite-pokemon/selector/app.selector';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private favoriteItems: any = [];

  constructor(private store: Store<AppState>) {
    this.loadFromLocalStorage();
  }

  private loadFromLocalStorage() {

    //print the initial state for local and ngRx
    this.printItems();

    //load data to local variable
    this.updateLocal();

    //load data to state
    this.updateState();
  }

  //use services and local variable with localstorage

  private updateLocal() {
    const object = localStorage.getItem('favorites');
    this.favoriteItems = object ? JSON.parse(object) : [];
    console.log('updateLocal: ' + JSON.stringify(this.favoriteItems));
  }

  public hasItem(id: string): boolean {
    const has = this.favoriteItems.filter((item: string) => item === id);
    return has.length > 0;
  }

  public setItem(value: string) {
    this.favoriteItems.push(value);
    localStorage.setItem('favorites', JSON.stringify(this.favoriteItems));
  }

  public removeItem(value: string) {
    //retrieve a new list without the value
    this.favoriteItems = this.favoriteItems.filter((item: any) => item !== value);

    //override the new list on the storage
    localStorage.setItem('favorites', JSON.stringify(this.favoriteItems));
  }

  //use state from ngRX with localstorage

  private updateState() {
    const object = localStorage.getItem('favorites');
    const arrItems: string[] = object ? JSON.parse(object) : [];

    this.store.dispatch(updateAllState({ids: arrItems}));
  }

  public has(idFind: string): boolean {

    //fetch list from localstorate
    const items = StoreService.fetchItems();

    return items.includes(idFind);
  }

  public set(value: string) {

    //fetch list from localstorate
    const items = StoreService.fetchItems();

    //put the value on the list
    items.push(value);

    //override the list on localstorage
    localStorage.setItem('favorites', JSON.stringify(items));

    //add on the state
    this.store.dispatch(add({id: value}));

  }

  public remove(value: string) {

    //fetch list from localstorate
    let items = StoreService.fetchItems();

    //retrieve a new list without the value
    items = items.filter((item: any) => item !== value);

    //override the new list on the storage
    localStorage.setItem('favorites', JSON.stringify(items));

    //remove from the state
    this.store.dispatch(remove({id: value}));
  }

  private printItems() {
    const observable = this.store.select(selectItemns);

    observable.subscribe(value => {
      console.log('this.items: ' + JSON.stringify(this.favoriteItems));
      console.log('updateState: ' + JSON.stringify(value));
    });
  }

  private static fetchItems() {
    //fetch the list from localstorage
    const item = localStorage.getItem('favorites');

    //Convert the value to JSON if existed, or create nan empty array
    return item ? JSON.parse(item) : [];
  }

  private samplesFindId(idFind: any) {
    const product$ = this.store.select(selectItemById, {id: idFind});
    product$.subscribe(value => {
      console.log('selectItemById: ' + value);
    });

    const observable1 = this.store.select(selectById, {id: idFind});
    observable1.subscribe(value => {
      console.log('selectById: ' + value);
    });
  }
}
