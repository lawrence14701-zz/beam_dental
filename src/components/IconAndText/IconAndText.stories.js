import React from 'react';
import IconAndText from './IconAndText';
import { ThemeProvider } from '@material-ui/styles';
import muiTheme from '../../Theme/theme'


export default {
	title: 'IconAndText',
	component: IconAndText,
	args: { text: 'brushes', 'num': '2' },
	argTypes: { onClick: { action: 'clicked' } },
	decorators: [(Story) => <ThemeProvider theme={muiTheme}><Story/></ThemeProvider>]

};

const Template = (args) => <IconAndText {...args} />;

export const Blue = Template.bind({});
export const Pink = Template.bind({});
export const Green = Template.bind({});

Blue.args = {
	color: 'blue',
};

Pink.args = {
	color: 'pink',
};

Green.args = {
	color: 'greens',
};
