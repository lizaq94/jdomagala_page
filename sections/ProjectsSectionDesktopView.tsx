'use client';

import FlexBlocks from '@/components/FlexBlocks/FlexBlocks';
import ProjectBlock from '@/components/ProjectBlock/ProjectBlock';
import Button from '@/components/Button/Button';
import { IProjectData } from '@/types/cmsTypes';
import { useState } from 'react';
import useRwd from '@/hooks/useRwd';

interface IProps {
	projects: IProjectData[];
	buttonText: string;
}

const ProjectsSectionDesktopView = (props: IProps) => {
	const { projects, buttonText } = props;
	const COUNT_PRODUCT_TO_VIEW = 4;
	const [displayedProjects, setDisplayedProjects] = useState(COUNT_PRODUCT_TO_VIEW);

	const { isRwd } = useRwd();

	if (isRwd) return null;

	const loadMoreProjects = () => {
		setDisplayedProjects((prev) => prev + COUNT_PRODUCT_TO_VIEW);
	};

	const getProjectsToView = (allProjects: IProjectData[]) => {
		return allProjects.slice(0, displayedProjects);
	};
	const projectsToDisplay = getProjectsToView(projects);
	const showLoadMoreButton = projects.length > projectsToDisplay.length;
	return (
		<>
			<FlexBlocks additionalClassName="withProjects">
				{getProjectsToView(projects).map((project, index) => (
					<ProjectBlock
						key={index}
						status={project.projectStatus}
						name={project.title}
						subtitle={project.subtitle}
						images={project.images}
						slug={project.slug}
					/>
				))}
			</FlexBlocks>
			{showLoadMoreButton && <Button content={buttonText} onClick={loadMoreProjects} filled />}
		</>
	);
};

export default ProjectsSectionDesktopView;
