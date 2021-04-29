import React from 'react';

import { SectionHero } from './Hero';

export default {
  title: 'Example/SectionHero',
  component: SectionHero,
  argTypes: {
    bgColor: { control: 'color' },
  },
};

const Template = (args) => <SectionHero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  bgColor: '#666',
	title: 'Hello world!',
	text: <p>Lorem ipsum dolor sit ammet</p>,
};