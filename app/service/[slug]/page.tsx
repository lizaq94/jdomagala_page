import Section from '@/components/Section/Section';
import { getServiceData, getServicesData } from '@/lib/api';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ServiceView = async ({ params }: any) => {
	const data = await getServiceData(params.slug);
	const allServicesData = await getServicesData();

	if (!data) notFound();

	const servicesNavigationItem = allServicesData?.map((service) => ({
		name: service.title,
		slug: service.slug,
	}));

	return (
		<div className="w-full">
			<div
				className="relative w-full h-[400px] overflow-hidden flex flex-col justify-center bg-cover bg-center md:h-[500px]"
				style={{ backgroundImage: `url(${data.heroImage.url})` }}
			>
				<div className="absolute inset-0 bg-gradient-to-r from-cyan-600/70 to-blue-600/70" />
				{data?.title && (
					<h1 className="relative z-10 w-full max-w-container mx-auto px-5 text-white font-secondary text-5xl font-bold md:text-7xl md:px-0">
						{data.title}
					</h1>
				)}
			</div>

			<Section customClass="px-5 md:px-0">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
					<aside className="lg:col-span-3">
						<div className="lg:sticky lg:top-24">
							<h3 className="text-lg font-semibold text-slate-900 mb-4 hidden lg:block">Nasze usługi</h3>
							<nav className="flex overflow-x-auto gap-2 pb-2 lg:flex-col lg:overflow-x-visible lg:pb-0 lg:gap-1">
								{servicesNavigationItem?.length &&
									servicesNavigationItem.map((service) => {
										const isSelected = params.slug === service.slug;
										return (
											<Link
												href={`/service/${service.slug}`}
												className={`shrink-0 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
													isSelected
														? 'bg-blue-600 text-white shadow-md'
														: 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
												}`}
												key={service.slug}
											>
												{service.name}
											</Link>
										);
									})}
							</nav>
						</div>
					</aside>

					<main className="lg:col-span-6">
						<div className="service-title relative mb-8">
							<h2 className="text-4xl font-bold text-slate-900 md:text-5xl">{data.title}</h2>
						</div>
						<div
							className="prose prose-lg prose-slate max-w-none [&_p]:text-slate-600 [&_p]:leading-relaxed [&_p]:mb-6 [&_span]:text-lg [&_span]:font-semibold [&_span]:text-slate-900 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:text-slate-600 [&_li]:mb-2"
							dangerouslySetInnerHTML={{ __html: data.content }}
						/>
					</main>

					<aside className="lg:col-span-3">
						<div className="lg:sticky lg:top-24">
							<div className="bg-blue-600 rounded-lg p-8 text-white shadow-xl">
								<h3 className="text-2xl font-bold font-secondary mb-4 leading-tight">
									{data.contactBoxTitle}
								</h3>
								<p className="text-blue-100 text-sm leading-relaxed mb-6">
									{data.contactBoxDescription}
								</p>
								<Link
									href={data.buttonUrl}
									className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-200"
								>
									Kontakt
									<ArrowRight className="w-5 h-5" />
								</Link>
							</div>
						</div>
					</aside>
				</div>
			</Section>
		</div>
	);
};

export default ServiceView;
