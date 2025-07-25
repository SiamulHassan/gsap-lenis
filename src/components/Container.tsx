import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
	return <div className='container mx-auto mt-[70px] px-4'>{children}</div>;
};

export default Container;
