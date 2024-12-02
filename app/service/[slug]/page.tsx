import Section from '@/components/Section/Section';
import classes from '@styles/pages/ServiceView.module.scss';
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
		<div className={classes.wrapper}>
			<div className={classes.heroImage} style={{ backgroundImage: `url(${data.heroImage.url})` }}>
				{data?.title && <h2 className={classes.heroTitle}>{data.title}</h2>}
			</div>
			<Section customClass={classes.sectionWrapper}>
				<div className={classes.sectionContent}>
					<div className={classes.sidePanel}>
						<div className={classes.sidePanelNavigation}>
							{servicesNavigationItem?.length &&
								servicesNavigationItem.map((service) => {
									const isSelected = params.slug === service.slug;
									return (
										<Link
											href={`/service/${service.slug}`}
											className={`${classes.sidePanelItem} ${isSelected ? classes.selected : ''}`}
											key={service.slug}
										>
											{service.name}
										</Link>
									);
								})}
						</div>
					</div>
					<div className={classes.contentWrapper}>
						<h2 className={classes.title}>{data.title}</h2>
						<div dangerouslySetInnerHTML={{ __html: data.content }}></div>
					</div>
					<div className={classes.contactBlock}>
						<span className={classes.contactBlockTitle}>{data.contactBoxTitle}</span>
						<p className={classes.contactBlockDescription}>{data.contactBoxDescription}</p>
						<ButtonArrow url={data.buttonUrl} />
					</div>
				</div>
			</Section>
		</div>
	);
};

export default ServiceView;
