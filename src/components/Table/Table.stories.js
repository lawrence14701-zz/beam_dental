import React from 'react';
import Table from './Table';
import { ThemeProvider } from '@material-ui/styles';
import muiTheme from '../../Theme/theme';
import Button from '../Button/Button';

export default {
	title: 'Table',
	component: Table,
	args: {
		data: {
			columns: [
				{ title: 'Name', field: 'name' },
				{ title: 'Brush Color', field: 'brush_color', type: 'string' },
			],
			data: [
				{ name: 'Padme', brush_color: 'blue' },
				{
					name: 'Luke',
					brush_color: 'green',
				},
			],
		},
	},
	argTypes: { onClick: { action: 'clicked' } },
	decorators: [
		(Story) => (
			<ThemeProvider theme={muiTheme}>
				<Story />
			</ThemeProvider>
		),
	],
};

const Template = (args) => <Table {...args} />;

export const ButtonTable = Template.bind({});
export const Editable = Template.bind({});

ButtonTable.args = {
	title: 'Family Members',
	actionOne: { node: <Button color="primary">Starter</Button>, name: 'starter' },
	actionTwo: { node: <Button color="secondary">Refill</Button>, name: 'refill' },
};

Editable.args = {
	title: 'Family Members',
};
