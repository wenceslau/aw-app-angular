import {ItemListComponent} from './item-list.component';
import {StoreService} from '../../services/store.service';

export class MockStoreService {
  getValue() {
    return 'mock value';
  }
}

const mockedItem = {
  id: 1,
  name: 'bulbasaur',
  sprites: {
    other: {
      'official-artwork': {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
      }
    }
  }
};

describe('<ListItem>', () => {
  it('should render correctly', () => {
    cy.mount(ItemListComponent, {
      componentProperties: {
        item: mockedItem
      }, providers: [
        {provide: StoreService, useClass: MockStoreService}
      ]
    });
    cy.get('[id=\'list-item-1\']').should('be.visible');
  });
})
;
