'use client';

import Section from '@/components/Section/Section';
import classes from '@styles/pages/ServiceView.module.scss';
import useRwd from '@/hooks/useRwd';

const ServiceView = ({ params }: any) => {
	const { isRwd } = useRwd();

	return (
		<div className={classes.wrapper}>
			<div className={classes.heroImage}>
				{/*TODO:change to next image*/}
				<img
					src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt=""
				/>
			</div>
			<Section customClass={classes.sectionWrapper}>
				<h2 className={classes.title}>Service</h2>
				<div className={classes.sectionContent}>
					<div className={classes.sidePanel}>
						<ul className={classes.sidePanelNavigation}>
							<li className={classes.sidePanelItem}>Service 1</li>
							<li className={classes.sidePanelItem}>Service 2</li>
							<li className={classes.sidePanelItem}>Service 2</li>
							<li className={classes.sidePanelItem}>Service 3</li>
							<li className={classes.sidePanelItem}>Service 4</li>
							<li className={classes.sidePanelItem}>Service 5</li>
						</ul>
					</div>
					<div className={classes.contentWrapper}>
						<span>Heading 1</span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non lacinia sem. Integer consectetur vulputate enim
							quis tristique. Donec vehicula, purus suscipit volutpat blandit, orci tortor elementum enim, id venenatis turpis
							quam quis nisi. Sed a lacus semper, aliquam enim eget, viverra nisi. Proin condimentum dolor arcu, in porttitor
							ante lacinia ac. Nulla sed convallis leo. Proin nibh neque, laoreet eget auctor in, rhoncus et sapien. Class
							aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis consequat a dui quis
							vulputate. Pellentesque nec malesuada dolor. Suspendisse potenti. Pellentesque odio mauris, ultricies et
							imperdiet ac, sollicitudin non diam. Nulla sollicitudin nibh eu mi porttitor vestibulum. Donec quis tellus erat.
							Donec finibus neque ipsum, porttitor sagittis sem dictum non. Duis maximus consectetur est eu iaculis.
						</p>
						<span>Heading 2</span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non lacinia sem. Integer consectetur vulputate enim
							quis tristique. Donec vehicula, purus suscipit volutpat blandit, orci tortor elementum enim, id venenatis turpis
							quam quis nisi. Sed a lacus semper, aliquam enim eget, viverra nisi. Proin condimentum dolor arcu, in porttitor
							ante lacinia ac. Nulla sed convallis leo. Proin nibh neque, laoreet eget auctor in, rhoncus et sapien. Class
							aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis consequat a dui quis
							vulputate. Pellentesque nec malesuada dolor. Suspendisse potenti. Pellentesque odio mauris, ultricies et
							imperdiet ac, sollicitudin non diam. Nulla sollicitudin nibh eu mi porttitor vestibulum. Donec quis tellus erat.
							Donec finibus neque ipsum, porttitor sagittis sem dictum non. Duis maximus consectetur est eu iaculis.
						</p>
					</div>
				</div>
			</Section>
		</div>
	);
};

export default ServiceView;
