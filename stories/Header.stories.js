import React from 'react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;
export const Main = Template.bind({});