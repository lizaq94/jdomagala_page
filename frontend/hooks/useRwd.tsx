import { useEffect, useState } from 'react';

const useRwd = () => {
	const MAX_MOBILE_WIDTH = 768;
	const [screenWidth, setScreenWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => setScreenWidth(window.innerWidth);

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	const isRwd = screenWidth <= MAX_MOBILE_WIDTH;

	return { isRwd };
};

export default useRwd;
