import Section from '@/components/Section/Section';
import styles from '@styles/pages/ProjectView.module.scss';
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
		<Section customClass={styles.sectionWrapper}>
			<div className={styles.contentWrapper}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.subTitle}>{subtitle}</p>
				<div className={styles.detailsWrapper}>
					{projectInformation.map((info) => (
						<div key={info.id} className={styles.detailsElement}>
							<span className={styles.elementTitle}>{info.label}</span>
							<span className={styles.elementDescription}>{info.placeholder}</span>
						</div>
					))}
				</div>
				<Gallery photos={projectImages} showCarousel={showGalleryCarousel} />
				<div className={styles.descriptionWrapper}>{description}</div>
				<div className={styles.scopeOfWorkWrapper}>
					<h3 className={styles.scopeOfWorkTitle}>{scopeOfWorkTitle}</h3>
					<ul className={styles.scopeOfWorkList}>
						{scopeOfWorkItems.map((item, index) => (
							<li key={index} className={styles.listItem}>
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
