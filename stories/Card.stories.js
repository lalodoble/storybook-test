import React from 'react';

import ic from './public/pane-1-icon.png';
import { Card } from './Card';

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    icon: { control: 'image' },
    title: { control: 'text' },
    text: { control: 'text' },
  },
};

const Template = (args) => <Card {...args} />;

export const Main = Template.bind({});
Main.args = {
  icon: ic,
  title: 'Blue',
  text: 'Lorem Ipsum dolor sit ammet',
};