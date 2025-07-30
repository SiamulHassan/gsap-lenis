'use client';
import {
	AutoFitFill,
	Button,
	Container,
	ExplicitImplicit,
	GridLayout,
	Modal,
} from '@/components';
import Masonary from '@/components/masionary-grid/MasonaryGrid';
import { OpenFormButton, useModal } from '@/components/Modal/Modal';
import React from 'react';

const Page = () => {
	// const renderClass = (index: number) => {
	// 	switch (index >= 1) {
	// 		case index === 1:
	// 			return 'col-[1/2] row-[1/-1]';
	// 		case index === 2:
	// 			return 'col-[2/3] row-[1/2]';
	// 		case index === 3:
	// 			return 'col-[2/3] row-[2-3]';
	// 		case index === 4:
	// 			return 'col-[3/-1] row-[1/-1]';
	// 	}
	// };
	const layoutClasses: Record<string, string> = {
		1: 'col-[1/2] row-[1/-1]',
		2: 'col-[2/3] row-[1/2]',
		3: 'col-[2/3] row-[2/3]',
		4: 'col-[3/-1] row-[1/-1]',
	};

	const renderClass = (index: number) => layoutClasses[index] || '';
	return (
		<div className='main flex flex-col gap-4'>
			{/* practice 6 */}
			<Container>
				<Masonary />
			</Container>
			{/* practice 5 */}
			<div className='mt-[80px]'>
				<Modal>
					<Modal.Open>
						<OpenFormButton PropBtn={Button} openName='form' btnName='Openn' />
					</Modal.Open>

					<Modal.Window name='form'>
						<div>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Molestiae accusantium numquam voluptatem adipisci ducimus eos
							dolor! Laborum ex animi soluta.
						</div>
					</Modal.Window>
				</Modal>
			</div>
			{/* practice 4 */}
			<AutoFitFill />
			{/* practice 3 */}
			<ExplicitImplicit />
			{/* practice 2 */}
			<GridLayout />

			{/* practice 1 */}
			<Container>
				<div className='grid grid-cols-3 grid-rows-2 gap-2'>
					{Array.from({ length: 4 }, (_, i) => (
						<div key={i} className={`bg-red-400 ${renderClass(i + 1)}`}>
							this is item {i + 1}
						</div>
					))}
				</div>
			</Container>
		</div>
	);
};

export default Page;
// we are not able to call useModal outside of Modal component (Modal context) and we also do not call the hook inside jsx. so we did this -- we wrapped the btn inside a component and used useModal and called that compoent Modal Compoent ,so now useModal is inside the context

//////////////////// optimized solutions
// const layoutClasses = {
// 	1: 'col-[1/2] row-[1/-1]',
// 	2: 'col-[2/3] row-[1/2]',
// 	3: 'col-[2/3] row-[2/13]',
// 	4: 'col-[3/-1] row-[1/-1]',
// };

// const renderClass = (index: number) => layoutClasses[index] || '';

//////////////////////// easy solution by using areas
{
	/* <div
	className="grid gap-4"
	style={{
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 2fr',
		gridTemplateRows: 'repeat(2, 200px)',
		gridTemplateAreas: `
			"one two four"
			"one three four"
		`,
	}}
>
	<div style={{ gridArea: 'one' }} className="bg-red-400">Item 1</div>
	<div style={{ gridArea: 'two' }} className="bg-green-400">Item 2</div>
	<div style={{ gridArea: 'three' }} className="bg-blue-400">Item 3</div>
	<div style={{ gridArea: 'four' }} className="bg-yellow-400">Item 4</div>
</div>
==> Semantic layout: easy to visualize the structure.

==> Easier to change layout responsively.

==> Great for complex dashboards or hero sections.
*/
}
