import {ListComponent} from './list.component';
import {Meta, moduleMetadata, type StoryObj} from '@storybook/angular';
import {StoreService} from '../../services/store.service';
import {ItemListComponent} from '../item-list/item-list.component';
import {CommonModule} from '@angular/common';

export class MockStoreService {
  getValue() {
    return 'mock value';
  }
}

const mockedItems = [
  {
    id: 1,
    name: 'bulbasaur',
    sprites: {
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
        }
      }
    }
  },
  {
    id: 2,
    name: 'bulbasaur2',
    sprites: {
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
        }
      }
    }
  }
];

const meta: Meta<ListComponent> = {
  title: 'Components/List',
  component: ListComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [
        ListComponent,
        ItemListComponent,
      ],
      imports: [
        CommonModule,
      ],
      providers: [
        {provide: StoreService, useClass: MockStoreService}
      ],
    }),
  ],
  argTypes: {
    items: {
      control: 'text',
      type: {name: 'string', required: true},
      description: 'Test id for the heart component'
    },
  },
  args: {
    items: mockedItems,
  }
};

export default meta;
type Story = StoryObj<ListComponent>;

export const List: Story = {};
