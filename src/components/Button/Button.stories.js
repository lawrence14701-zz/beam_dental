import React from 'react';
import Button from './Button';

export default {
	title: 'Button',
	component: Button,
	args: { children: 'Button' },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
	variant: 'primary',
};

Secondary.args = {
	variant: 'secondary',
};
