import React from 'react';
import { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
	additionalClassName?: string;
}

const additionalClassMap: Record<string, string> = {
	withProjects: 'w-full mb-[70px]',
	animatedCounters: 'items-center justify-center',
};

const FlexBlocks = ({ children, additionalClassName = '' }: IProps): JSX.Element => {
	const baseClasses = 'flex flex-col items-start justify-between flex-wrap md:flex-row';
	const extraClasses = additionalClassMap[additionalClassName] || '';

	return <div className={`${baseClasses} ${extraClasses}`}>{children}</div>;
};

export default FlexBlocks;
