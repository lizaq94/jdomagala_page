'use client';

import { ArrowSquareRight } from '@phosphor-icons/react';
import Link from 'next/link';

interface ButtonArrowProps {
	url: string;
}

const ButtonArrow = ({ url }: ButtonArrowProps) => {
	return (
		<Link href={url}>
			<ArrowSquareRight size={50} color="#fff" />
		</Link>
	);
};

export default ButtonArrow;
