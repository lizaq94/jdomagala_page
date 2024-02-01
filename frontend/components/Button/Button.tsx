import Link from 'next/link';
import styles from '@styles/components/Button.module.scss';

interface IProps {
	content: string;
	url?: string;
	onClick?: () => void;
	outline?: boolean;
	hoverEffect?: boolean;
	mobileNavigationButton?: boolean;
}
const Button = ({ content, url, onClick, outline, hoverEffect, mobileNavigationButton }: IProps): JSX.Element => {
	const classNames = `Button ${mobileNavigationButton ? styles.mobileNavigationButton : ''} ${styles.wrapper} ${
		outline ? styles.outline : ''
	} ${hoverEffect ? styles.hover : ''}`;
	return !!url ? (
		<Link className={classNames} href={url}>
			{content}
		</Link>
	) : (
		<button className={classNames} onClick={onClick}>
			{content}
		</button>
	);
};

export default Button;
