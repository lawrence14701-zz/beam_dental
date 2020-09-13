import React from 'react';
import Button from '@material-ui/core/Button';

export default {
	title: 'Button',
	component: Button,
	args: { variant: 'contained', children: 'Button' },
	argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
	color: 'primary',
};

Secondary.args = {
	color: 'secondary',
};
