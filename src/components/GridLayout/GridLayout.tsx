import React from 'react';
import Container from '../Container';

const GridLayout = () => {
	/////////////////////// Build the shaptahik shoriotpur layout (news grid)
	return (
		<Container>
			<div className='grid_class grid grid-cols-[1fr_1fr_1fr_0.7fr] grid-rows-[2.5rem_6rem_12rem_2.5rem] gap-2'>
				<div className='col-[1/-1]'>Header</div>
				<div className=''>Small Box 1</div>
				<div className=''>Small Box 2</div>
				<div className=''>Small Box 3</div>
				<div className='col-[4/-1] row-[2/4]'>Sidebar</div>
				<div className='col-[1/span_3]'>Main Content</div>
				<div className='col-[1/-1]'>Footer</div>
			</div>
		</Container>
	);
};

export default GridLayout;
