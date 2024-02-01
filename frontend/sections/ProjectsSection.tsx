'use client';

import FlexBlocks from '@/components/FlexBlocks/FlexBlocks';
import ProjectBlock from '@/components/ProjectBlock/ProjectBlock';
import Section from '@/components/Section/Section';
import { achievementSectionQuery } from '@/graphql/queries/AchievmentSectionQuery';
import { projectsQuery } from '@/graphql/queries/ProjectsQuery';
import { IProjectData, ProjectStatus } from '@/types/ProjectType';
import { extractDataFromApiResponse } from '@/utils/utils';
import { useSuspenseQuery } from '@apollo/client';
import { projectsSectionQuery } from '@/graphql/queries/ProjectsSectionQuery';
import Heading from '@/components/Heading/Heading';
import Button from '@/components/Button/Button';
import { useState } from 'react';
import Slider from '@/components/Slider/Slider';
import { SwiperSlide } from 'swiper/react';

interface IProps {
	test?: string;
}

interface IProjectsSectionData {
	title: string;
	buttonText: string;
}
const ProjectsSection = (props: IProps) => {
	const COUNT_PRODUCT_TO_VIEW = 4;
	const [displayedProjects, setDisplayedProjects] = useState(COUNT_PRODUCT_TO_VIEW);
	const responseForProjects = useSuspenseQuery<any>(projectsQuery);
	const responseForSection = extractDataFromApiResponse<IProjectsSectionData>(useSuspenseQuery(projectsSectionQuery));

	const allProjects: IProjectData[] = responseForProjects.data.projects.data.map((project: any) => project.attributes);

	if (!allProjects.length || !responseForSection) return null;

	const { title, buttonText } = responseForSection;

	const loadMoreProjects = () => {
		setDisplayedProjects((prev) => prev + COUNT_PRODUCT_TO_VIEW);
	};

	const getProjectsToView = (allProjects: IProjectData[]) => {
		return allProjects.slice(0, displayedProjects);
	};
	const projectsToDisplay = getProjectsToView(allProjects);
	const showLoadMoreButton = allProjects.length > projectsToDisplay.length;

	const getRwdView = () => {
		return (
			<Slider>
				{allProjects.map((project, index) => (
					<SwiperSlide>
						<h2>{index}</h2>
					</SwiperSlide>
				))}
			</Slider>
		);
	};

	return (
		<Section center>
			<Heading>{title}</Heading>
			<FlexBlocks additionalClassName="withProjects">
				{getProjectsToView(allProjects).map((project, index) => (
					<ProjectBlock
						key={index}
						status={project.status}
						name={project.title}
						description={project.description}
						images={project.images}
						slug={project.slug}
					/>
				))}
			</FlexBlocks>
			{showLoadMoreButton && <Button content={buttonText} outline onClick={loadMoreProjects} />}
			{getRwdView()}
		</Section>
	);
};

export default ProjectsSection;
