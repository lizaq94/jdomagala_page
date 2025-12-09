import Section from '@/components/Section/Section';
import { getServiceData, getServicesData } from '@/lib/api';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ButtonArrow from '@/components/ButtonArrow/ButtonArrow';

const ServiceView = async ({ params }: any) => {
	const data = await getServiceData(params.slug);
	const allServicesData = await getServicesData();

	if (!data) notFound();

	const servicesNavigationItem = allServicesData?.map((service) => ({ name: service.title, slug: service.slug }));

	return (
		<div className="w-full">
			<div
				className="w-full h-[400px] overflow-hidden flex flex-col justify-center bg-cover md:h-[500px] [&_img]:w-full [&_img]:h-full [&_img]:object-cover"
				style={{ backgroundImage: `url(${data.heroImage.url})` }}
			>
				{data?.title && (
					<h2 className="w-full max-w-container mx-auto pl-5 text-white font-secondary text-[60px] md:text-[80px] md:p-0">
						{data.title}
					</h2>
				)}
			</div>
			<Section customClass="flex flex-col md:flex-row">
				<div className="flex flex-col md:flex-row">
					<div className="w-full px-5 mb-5 md:p-0 md:m-0 md:basis-[15%] md:max-w-[200px]">
						<div className="list-none flex justify-between overflow-x-scroll md:overflow-x-auto md:flex-col">
							{servicesNavigationItem?.length &&
								servicesNavigationItem.map((service) => {
									const isSelected = params.slug === service.slug;
									return (
										<Link
											href={`/service/${service.slug}`}
											className={`min-w-[150px] py-2.5 px-5 font-normal text-sm cursor-pointer mb-[5px] text-center uppercase transition-colors duration-200 tracking-[0.2px] text-body-font md:min-w-0 md:py-[13px] md:px-5 md:bg-light-gray hover:text-primary ${isSelected ? 'bg-primary text-white' : ''}`}
											key={service.slug}
										>
											{service.name}
										</Link>
									);
								})}
						</div>
					</div>
					<div className="flex-1 px-5 md:px-10 [&_span]:text-lg [&_span]:font-semibold [&_span]:mb-2.5 [&_p]:my-5">
						<h2 className="service-title relative text-[52px] font-semibold mb-5">{data.title}</h2>
						<div dangerouslySetInnerHTML={{ __html: data.content }}></div>
					</div>
					<div className="w-full max-h-[360px] bg-primary flex flex-col justify-center px-5 py-10 mt-[30px] text-white md:w-[35%] md:max-w-[400px] md:px-10 md:mt-0">
						<span className="text-[34px] leading-[38px] font-secondary font-semibold mb-[15px]">
							{data.contactBoxTitle}
						</span>
						<p className="text-sm mb-[42px]">{data.contactBoxDescription}</p>
						<ButtonArrow url={data.buttonUrl} />
					</div>
				</div>
			</Section>
		</div>
	);
};

export default ServiceView;
