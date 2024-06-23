import {ItemListComponent} from "./item-list.component";
import {Meta, moduleMetadata, type StoryObj} from "@storybook/angular";
import {StoreService} from "../../services/store.service";
import {MockStoreService} from "../list/list.stories";

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

const meta: Meta<ItemListComponent> = {
  title: 'Components/Item List',
  component: ItemListComponent,
  decorators: [
    moduleMetadata({
      providers: [
        {provide: StoreService, useClass: MockStoreService}
      ],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    item: {
      control: 'text',
      type: {name: 'string', required: true},
      description: 'Test id for the heart component'
    },
    isSelected: {
      control: 'boolean',
      type: {name: 'boolean', required: true},
      description: 'Boolean to determine if the heart is selected or not'
    }
  },
  args: {
    item: mockedItem,
    isSelected: false
  }
};

export default meta;
type Story = StoryObj<ItemListComponent>;

export const ItemList: Story = {};
