import Link from 'next/link';
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
	buttonType?: 'button' | 'submit' | 'reset';
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
	buttonType = 'button',
}: IProps): JSX.Element => {
	const classNames = `Button ${mobileNavigationButton ? clasess.mobileNavigationButton : ''} ${clasess.wrapper} ${
		outline ? clasess.outline : ''
	} ${hoverEffect ? clasess.hover : ''} ${clickEffect ? clasess.clickEffect : ''} ${customClass}`;
	return !!url ? (
		<Link className={classNames} href={url}>
			{content}
		</Link>
	) : (
		<button className={classNames} onClick={onClick} type={buttonType}>
			{content}
		</button>
	);
};

export default Button;
