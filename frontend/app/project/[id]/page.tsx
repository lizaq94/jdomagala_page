import Section from '@/components/Section/Section';
import styles from '@/styles/pages/ProjectPage.module.scss';
import Gallery from '@/components/Gallery/Gallery';

const ProjectView = ({ params }: any) => {
	return (
		<Section customClass={styles.sectionWrapper}>
			<div className={styles.leftSideWrapper}>
				<h2 className={styles.title}>Kraków</h2>
				<p className={styles.subTitle}>Dom jednorodziny</p>
				<div className={styles.detailsWrapper}>
					<div className={styles.detailsElement}>
						<span className={styles.elementTitle}>Inwestor</span>
						<span className={styles.elementDescription}>osoba prywatna</span>
					</div>
					<div className={styles.detailsElement}>
						<span className={styles.elementTitle}>Okres realizacji</span>
						<span className={styles.elementDescription}>wrzesien 2019 - lipiec 2020</span>
					</div>
					<div className={styles.detailsElement}>
						<span className={styles.elementTitle}>Status inwestycji</span>
						<span className={styles.elementDescription}>Zakończona</span>
					</div>
				</div>
				<div className={styles.descriptionWrapper}>
					<p className={styles.descriptionParagraph}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus diam, vulputate eu lectus mattis, feugiat
						ullamcorper lorem. Morbi molestie ante quis lectus euismod pellentesque. Fusce gravida vitae nisi sit amet finibus.
					</p>
					<p className={styles.descriptionParagraph}>
						Sed imperdiet faucibus felis, nec tempor metus. Integer sodales ultricies aliquam. Proin ornare nisi tellus. Nulla
						maximus dolor enim, vitae sagittis diam pretium et. maximus dolor enim, vitae sagittis diam pretium et.
					</p>
				</div>
				<div className={styles.scopeOfWorkWrapper}>
					<h3 className={styles.scopeOfWorkTitle}>Zakres pracy:</h3>
					<ul className={styles.scopeOfWorkList}>
						<li className={styles.listItem}>Stan surowy</li>
						<li className={styles.listItem}>Odwodnienie</li>
						<li className={styles.listItem}>Konstrukcja dachowa</li>
						<li className={styles.listItem}>Pokrycie dachowe</li>
					</ul>
				</div>
			</div>
			<div className={styles.galleryWrapper}>
				<Gallery />
			</div>
		</Section>
	);
};

export default ProjectView;
