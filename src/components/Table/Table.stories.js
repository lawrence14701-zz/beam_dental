import React from 'react';
import List from './Table';
import { ThemeProvider } from '@material-ui/styles';
import muiTheme from '../../Theme/theme'

export default {
	title: 'List',
	component: List,
	// args: { title: 'Family Members', labels: ['bob', 'jessica', 'jimmy'] },
    // argTypes: { onClick: { action: 'clicked' } },
    decorators: [(Story) => <ThemeProvider theme={muiTheme}><Story/></ThemeProvider>]

};

const Template = (args) => <List {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
	// children: <Button color='primary'/>
};
