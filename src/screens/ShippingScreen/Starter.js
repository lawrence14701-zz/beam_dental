import React from 'react';
import StarterBox from '../../components/Card/Card';
import IconWithText from '../../components/IconAndText/style';
import uuid from 'react-uuid';
import { times } from 'lodash';

function generateStarterBoxes(colors) {
	return colors.map(ele => {
		const color = Object.keys(ele)[0]
		const { brushes } = Object.values(ele)[0];
		/* 
            doesn't matter if I divide by brushes or 
            replacement heads since they are always equal 
        */
		const numOfBoxes = Math.floor(brushes / 2);
		const remainder = brushes % 2;

		function generate(element) {
			// debugger
			const numOfTimes = times(numOfBoxes, String);
			return numOfTimes.map(() =>
				React.cloneElement(element, {
					key: uuid(),
				})
			);
		}
		// debugger
		return (
			<React.Fragment key={uuid()}>
				{generate(
					<StarterBox>
					hi
						{/* <IconWithText color={color} />
						<IconWithText color={color} /> */}
					</StarterBox>
				)}
				{remainder > 0 ? (
					<StarterBox>
					jo
						{/* <IconWithText color={color} /> */}
					</StarterBox>
				) : null}
			</React.Fragment>
		);
	})
}

const Starter = (props) => {
	const {starter} = props
	return(
		<>
			{generateStarterBoxes(starter)}
		</>
	)
};

export default Starter;
