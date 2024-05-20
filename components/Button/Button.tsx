import NextLink from 'next/link';
import clasess from '@styles/components/Button.module.scss';

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
	const classNames = `Button ${mobileNavigationButton ? clasess.mobileNavigationButton : ''} ${clasess.wrapper} ${
		outline ? clasess.outline : ''
	} ${hoverEffect ? clasess.hover : ''} ${clickEffect ? clasess.clickEffect : ''} ${
		filled ? clasess.filled : ''
	} ${customClass}`;

	return !!url ? (
		<NextLink className={classNames} href={url}>
			{content}
		</NextLink>
	) : (
		<button className={classNames} onClick={onClick} type={buttonType}>
			{isLoading ? <span className={clasess.loader}></span> : content}
		</button>
	);
};

export default Button;
