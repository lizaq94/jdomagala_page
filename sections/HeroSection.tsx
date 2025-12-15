import Button from '@/components/Button/Button';
import { IHeroSectionData } from '@/types/cmsTypes';

interface IProps {
	data: IHeroSectionData;
}

const HeroSection = ({ data }: IProps) => {
	if (!data) return null;

	const { button, title, description, imageBackground } = data;

	return (
		<div className="relative w-full min-h-screen flex items-center z-0 text-white">
			<div className="w-full max-w-container mx-auto py-32 px-5 md:px-8">
				<div className="w-full max-w-3xl flex flex-col items-start">
					<h1 className="w-full mb-8 font-secondary text-5xl md:text-7xl font-bold text-left uppercase leading-tight">
						{title}
					</h1>
					<p className="w-4/5 mb-10 text-lg md:text-xl font-light leading-relaxed">
						{description}
					</p>
					<Button
						content={button.label}
						filled={true}
						url={button.url}
						customClass="!bg-blue-600 hover:!bg-blue-700 !text-white !px-8 !py-4 !rounded-lg !shadow-xl !font-semibold !text-base"
					/>
				</div>
			</div>
			<div
				className="absolute inset-0 w-full h-full bg-cover bg-center -z-10 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-black/70 before:via-black/60 before:to-black/40"
				style={{ backgroundImage: `url(${imageBackground.url})` }}
			/>
		</div>
	);
};

export default HeroSection;
