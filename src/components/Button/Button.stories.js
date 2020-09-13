import React from 'react';
import Button from '@material-ui/core/Button';

export default {
	title: 'Button',
	component: Button,
	args: { children: 'Button' },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
	variant: 'contained',
};

Secondary.args = {
	variant: 'filled',
};
