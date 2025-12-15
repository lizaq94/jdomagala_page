'use client';

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
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
				{getProjectsToView(projects).map((project, index) => (
					<ProjectBlock
						key={index}
						name={project.title}
						images={project.images}
						slug={project.slug}
						index={index}
					/>
				))}
			</div>
			{showLoadMoreButton && (
				<div className="mt-8">
					<Button
						content={buttonText}
						onClick={loadMoreProjects}
						filled
						customClass="!bg-blue-600 hover:!bg-blue-700"
					/>
				</div>
			)}
		</>
	);
};

export default ProjectsSectionDesktopView;
