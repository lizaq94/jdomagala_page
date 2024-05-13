import Button from '@/components/Button/Button';
import classes from '@styles/sections/HeroSection.module.scss';
import { IHeroSectionData } from '@/types/cmsTypes';

// const data = {
// 	title: 'Home from you dreams',
// 	description:
// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus magna vel urna condimentum, et porta est' +
// 		' faucibus. Fusce ut orci eu nisi facilisis pulvinar. Phasellus ac condimentum velit. Nunc pulvinar cursus viverra',
// 	backgroundImage: {
// 		url: 'https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
// 		alternativeText: '',
// 	},
//
// } as {} as IHeroSectionData;

interface IProps {
	data: IHeroSectionData;
}

const HeroSection = ({ data }: IProps) => {
	if (!data) return null;

	const { button, title, description, imageBackground } = data;

	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				<div className={classes.content}>
					<h1 className={classes.title}>{title}</h1>
					<p className={classes.description}>{description}</p>
					<Button content={button.label} outline={true} hoverEffect={true} />
				</div>
				<div className={classes.background} style={{ backgroundImage: `url(${imageBackground.url})` }} />
			</div>
		</div>
	);
};

export default HeroSection;
