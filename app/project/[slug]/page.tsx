import Section from '@/components/Section/Section';
import Gallery from '@/components/Gallery/Gallery';
import { getProjectData } from '@/lib/api';
import { notFound } from 'next/navigation';

const ProjectView = async ({ params }: any) => {
	const data = await getProjectData(params.slug);

	if (!data) return notFound();

	const {
		title,
		subtitle,
		projectInformation,
		description,
		scopeOfWorkTitle,
		scopeOfWorkItems,
		images,
		showGalleryCarousel,
	} = data;

	const projectImages = images.map((image) => image.url);

	return (
		<Section customClass="min-h-full flex flex-col mt-10 md:flex-row">
			<div className="w-full px-5 md:px-0">
				<h2 className="text-[42px] tracking-[2px] md:text-[64px]">{title}</h2>
				<p className="text-base font-semibold tracking-[2px]">{subtitle}</p>
				<div className="flex my-[30px] md:my-5 md:mt-10">
					{projectInformation.map((info) => (
						<div key={info.id} className="flex flex-col text-sm border-r border-primary px-[15px] first:border-l first:border-primary last:border-r-0">
							<span className="mb-2">{info.label}</span>
							<span className="font-semibold">{info.placeholder}</span>
						</div>
					))}
				</div>
				<Gallery photos={projectImages} showCarousel={showGalleryCarousel} />
				<div className="py-[5px] my-[30px] md:my-5 [&_p]:mb-2.5 [&_p]:leading-6 [&_p]:font-light [&_p:last-of-type]:mb-0">
					{description}
				</div>
				<div className="my-[30px] md:my-5">
					<h3 className="text-xl">{scopeOfWorkTitle}</h3>
					<ul className="py-5 flex flex-wrap">
						{scopeOfWorkItems.map((item, index) => (
							<li key={index} className="list-none py-2.5 px-[30px] border border-primary m-[5px]">
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</Section>
	);
};

export default ProjectView;
