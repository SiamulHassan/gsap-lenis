import React from 'react';
import Container from '../Container';

const ExplicitImplicit = () => {
	return (
		<Container>
			<div className='grid grid-cols-2 grid-rows-[150px_150px] bg-[#ddd] gap-2'>
				<GridItem>item1</GridItem>
				<GridItem>item2</GridItem>
				<GridItem>item3</GridItem>
				<GridItem>item4</GridItem>
				<GridItem>item5</GridItem>
				<GridItem>item6</GridItem>
				<GridItem>item7</GridItem>
				<GridItem>item8</GridItem>
			</div>
		</Container>
	);
};

export default ExplicitImplicit;

const GridItem = ({ children }: any) => {
	return <div className='bg-amber-500 p-4'>{children}</div>;
};
