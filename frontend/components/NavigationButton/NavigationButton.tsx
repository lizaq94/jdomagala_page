import Link from 'next/link';
import styles from '@styles/components/NavigationButton.module.scss';

interface IProps {
	content: string;
	link: string;
}
const NavigationButtons = ({ content, link }: IProps) => {
	return (
		<div className={styles.navigationButton_wrapper}>
			<Link href={link} className={styles.navigationButton_content}>
				{content}
			</Link>
		</div>
	);
};

export default NavigationButtons;
