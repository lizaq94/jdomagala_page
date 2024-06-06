'use client';

import { useEffect, useState } from 'react';

const useRwd = () => {
	const innerHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

	const MAX_MOBILE_WIDTH = 768;
	const [screenWidth, setScreenWidth] = useState(innerHeight);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleResize = () => setScreenWidth(window?.innerWidth);

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}
	}, []);
	const isRwd = screenWidth <= MAX_MOBILE_WIDTH;

	return { isRwd };
};

export default useRwd;
