'use client';

import FlexBlocks from '@/components/FlexBlocks/FlexBlocks';
import ProjectBlock from '@/components/ProjectBlock/ProjectBlock';
import Section from '@/components/Section/Section';
import { achievementSectionQuery } from '@/graphql/queries/AchievmentSectionQuery';
import { projectsQuery } from '@/graphql/queries/ProjectsQuery';
import { IProjectData, ProjectStatus } from '@/types/ProjectType';
import { extractDataFromApiResponse } from '@/utils/utils';
import { useSuspenseQuery } from '@apollo/client';

interface IProps {
	test?: string;
}
const ProjectsSection = (props: IProps) => {
	const response = useSuspenseQuery(projectsQuery);

	const allProjects = response.data.projects.data.map((project) => project.attributes) as IProjectData[];

	if (!allProjects.length) return null;

	return (
		<Section>
			<FlexBlocks>
				{allProjects.map((project, index) => (
					<ProjectBlock
						key={index}
						status={project.status}
						name={project.title}
						description={project.description}
						images={project.images}
					/>
				))}
			</FlexBlocks>
		</Section>
	);
};

export default ProjectsSection;
