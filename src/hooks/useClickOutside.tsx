import { useEffect, useRef } from 'react';

export const useClickOutside = (handler: any) => {
	const ref = useRef<any>(null);
	useEffect(() => {
		const handleClick = (e: any) => {
			if (ref?.current && !ref?.current?.contains(e?.target)) {
				handler();
			}
		};
		window.addEventListener('click', handleClick, true);
		return () => window.removeEventListener('click', handleClick, true);
	}, [handler]);
	return ref;
};
