import React from 'react';
import Tabs from './Tabs';

export default {
	title: 'Tabs',
    component: Tabs,
};

const Template = (args) => <Tabs {...args}/>;

export const Primary = Template.bind({});



Primary.args = {
    tabs: {'itemOne': 'itemOnePage', 'itemTwo':'itemTwoPage'}
};

