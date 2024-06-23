import {HeartComponent} from './heart.component';
import {Meta, type StoryObj} from '@storybook/angular';

const meta: Meta<HeartComponent> = {
  title: 'Components/Heart',
  component: HeartComponent,
  tags: ['autodocs'],
  argTypes: {
    clickFavorite: {
      action: 'clicked',
      type: {name: 'function', required: true},
      description: 'Function to be called when the heart is clicked'
    },
    testId: {
      control: 'text',
      type: {name: 'string', required: true},
      description: 'Test id for the heart component'
    },
    selected: {
      control: 'boolean',
      type: {name: 'boolean', required: true},
      description: 'Boolean to determine if the heart is selected or not'
    }
  },
  args: {
    testId: 'heart-1',
    selected: false
  }
};

export default meta;
type Story = StoryObj<HeartComponent>;

export const Heart: Story = {};
