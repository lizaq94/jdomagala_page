import Section from '@/components/Section/Section';
import ProjectGallery from '@/components/ProjectGallery/ProjectGallery';
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
		<Section customClass="min-h-full flex flex-col px-5 md:px-0">
			<div className="w-full max-w-5xl mx-auto">
				<header className="mb-8">
					<h1 className="text-4xl font-bold text-slate-900 tracking-tight md:text-6xl">{title}</h1>
					<p className="text-lg font-medium text-slate-500 mt-2 tracking-wide">{subtitle}</p>
				</header>

				<div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-3 md:gap-6">
					{projectInformation.map((info) => (
						<div key={info.id} className="bg-slate-50 rounded-lg p-5 border-l-4 border-blue-600">
							<span className="block text-sm text-slate-500 uppercase tracking-wider mb-1">
								{info.label}
							</span>
							<span className="block text-lg font-semibold text-slate-900">{info.placeholder}</span>
						</div>
					))}
				</div>

				<ProjectGallery photos={projectImages} showCarousel={showGalleryCarousel} />

				<div className="my-10 [&_p]:text-slate-600 [&_p]:leading-relaxed [&_p]:mb-4 [&_p:last-of-type]:mb-0">
					{description}
				</div>

				<div className="my-10">
					<h3 className="text-2xl font-bold text-slate-900 mb-6">{scopeOfWorkTitle}</h3>
					<ul className="flex flex-wrap gap-3">
						{scopeOfWorkItems.map((item, index) => (
							<li
								key={index}
								className="py-3 px-6 border border-slate-300 rounded-lg text-slate-700 font-medium transition-colors duration-200 hover:border-blue-600 hover:text-blue-600 cursor-default"
							>
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
