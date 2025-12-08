import Button from '@/components/Button/Button';
import { IHeroSectionData } from '@/types/cmsTypes';

interface IProps {
	data: IHeroSectionData;
}

const HeroSection = ({ data }: IProps) => {
	if (!data) return null;

	const { button, title, description, imageBackground } = data;

	return (
		<div className="relative w-full border border-transparent z-0 text-white">
			<div className="w-full max-w-container mx-auto mt-[130px] mb-[190px]">
				<div className="w-full max-w-[780px] flex flex-col items-start px-5 md:px-0">
					<h1 className="w-full mb-[70px] font-secondary text-[50px] leading-[48px] md:text-[64px] md:leading-[62px] font-bold text-left uppercase">
						{title}
					</h1>
					<p className="w-4/5 mb-10 text-base md:text-xl font-light leading-[29px]">
						{description}
					</p>
					<Button content={button.label} outline={true} hoverEffect={true} />
				</div>
				<div
					className="absolute top-[calc(-118px-5px)] left-[-5px] w-[calc(100vw+5px)] h-[calc(100%+118px)] bg-cover overflow-auto mb-[30px] -z-10 before:content-[''] before:absolute before:inset-0 before:bg-black/50"
					style={{ backgroundImage: `url(${imageBackground.url})` }}
				/>
			</div>
		</div>
	);
};

export default HeroSection;
