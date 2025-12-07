import NextLink from 'next/link';

interface IProps {
	content: string;
	url?: string;
	onClick?: () => void;
	outline?: boolean;
	hoverEffect?: boolean;
	mobileNavigationButton?: boolean;
	customClass?: string;
	clickEffect?: boolean;
	filled?: boolean;
	buttonType?: 'button' | 'submit' | 'reset';
	isLoading?: boolean;
}

const Button = ({
	content,
	url,
	onClick,
	outline,
	hoverEffect,
	mobileNavigationButton,
	customClass,
	clickEffect,
	filled,
	buttonType = 'button',
	isLoading = false,
}: IProps): JSX.Element => {
	const baseClasses = `
		Button relative font-primary text-xl font-light leading-5
		mr-8 px-4 py-2.5 z-[1]
		bg-transparent text-inherit uppercase cursor-pointer
		flex justify-center items-center
	`;

	const outlineClasses = outline
		? `border border-white ${mobileNavigationButton ? 'border-body-font' : ''}`
		: '';

	const outlineHoverClasses = outline && hoverEffect
		? 'hover:bg-primary hover:text-white'
		: '';

	const filledClasses = filled
		? 'bg-primary text-white border-none transition-colors duration-100 hover:bg-primary-dark'
		: '';

	const hoverBorderClasses = hoverEffect ? 'hover-border-effect' : '';

	const mobileNavClasses = mobileNavigationButton
		? 'my-5 mx-0 text-body-font'
		: '';

	const clickEffectClasses = clickEffect
		? 'transition-transform duration-[0.5ms] active:scale-90'
		: '';

	const classNames = `
		${baseClasses}
		${outlineClasses}
		${outlineHoverClasses}
		${filledClasses}
		${hoverBorderClasses}
		${mobileNavClasses}
		${clickEffectClasses}
		${customClass || ''}
	`.replace(/\s+/g, ' ').trim();

	const loaderElement = (
		<span className="inline-block w-7 h-7 border-2 border-white border-b-transparent rounded-full animate-spin-loader" />
	);

	return !!url ? (
		<NextLink className={classNames} href={url} onClick={onClick}>
			{content}
		</NextLink>
	) : (
		<button className={classNames} onClick={onClick} type={buttonType}>
			{isLoading ? loaderElement : content}
		</button>
	);
};

export default Button;
