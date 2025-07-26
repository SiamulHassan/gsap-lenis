import React from 'react';
import Container from '../Container';

const AutoFitFill = () => {
	return (
		<Container>
			<div
				className='mx-4 grid grid-cols-[repeat(auto-fit,_minmax(min-content,1fr))] grid-rows-[150px_150px] bg-[#ddd] gap-2 mt-[80px]'
				// min-contetn use korle onek narrow hoite pare cell(item), so use it if client has not problem or use a fixed val
				// style={{
				// 	// 'repeat(auto-fill, minmax(200px, 1fr));'
				// 	gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))',
				// }}
			>
				<GridItem>Short</GridItem>
				<GridItem>This one has longer content</GridItem>
				<GridItem>Mid length</GridItem>

				{/* <GridItem>item4</GridItem> */}
				{/* <GridItem>item4</GridItem>
				<GridItem>item5</GridItem>
				<GridItem>item6</GridItem>
				<GridItem>item7</GridItem>
				<GridItem>item8</GridItem> */}
			</div>
		</Container>
	);
};

export default AutoFitFill;

const GridItem = ({ children }: any) => {
	return <div className='bg-amber-500'>{children}</div>;
};
