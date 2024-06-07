import { useEffect, useState } from 'react';

export const useRwd = () => {
	const MAX_MOBILE_WIDTH = 768;
	const initialWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
	const [isRwd, setIsRwd] = useState(initialWidth < MAX_MOBILE_WIDTH);

	useEffect(() => {
		if (typeof window !== undefined) {
			const setIsRwdHandler = () => {
				setIsRwd(window.innerWidth < MAX_MOBILE_WIDTH);
			};

			window.addEventListener('resize', setIsRwdHandler);
			setIsRwdHandler();

			return () => {
				window.removeEventListener('resize', setIsRwdHandler);
			};
		}
	}, []);

	return { isRwd };
};

export default useRwd;
