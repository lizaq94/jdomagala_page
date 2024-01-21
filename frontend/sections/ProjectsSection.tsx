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

interface IProps {
	test?: string;
}

interface IProjectsSectionData {
	title: string;
	buttonText: string;
}
const ProjectsSection = (props: IProps) => {
	const responseForProjects = useSuspenseQuery<any>(projectsQuery);
	const responseForSection = extractDataFromApiResponse<IProjectsSectionData>(useSuspenseQuery(projectsSectionQuery));

	const allProjects: IProjectData[] = responseForProjects.data.projects.data.map((project: any) => project.attributes);

	if (!allProjects.length || !responseForSection) return null;

	const { title, buttonText } = responseForSection;

	return (
		<Section center>
			<Heading>{title}</Heading>
			<FlexBlocks additionalClassName="withProjects">
				{allProjects.map((project, index) => (
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
			<Button content={buttonText} outline />
		</Section>
	);
};

export default ProjectsSection;
