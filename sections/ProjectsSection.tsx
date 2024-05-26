import Section from '@/components/Section/Section';
import Heading from '@/components/Heading/Heading';
import { IProjectSectionData } from '@/types/cmsTypes';
import { getProjectsData } from '@/lib/api';
import ProjectsSectionDesktopView from '@/sections/ProjectsSectionDesktopView';
import ProjectSectionRWDView from '@/sections/ProjectSectionRWDView';

interface IProps {
	data: IProjectSectionData;
}

const ProjectsSection = async ({ data }: IProps) => {
	const allProjects = await getProjectsData();

	if (!allProjects) return null;

	const { title, buttonText, sectionId } = data;

	return (
		<Section center id={sectionId}>
			<Heading title={title} />
			<ProjectSectionRWDView projects={allProjects} />
			<ProjectsSectionDesktopView projects={allProjects} buttonText={buttonText} />
		</Section>
	);
};

export default ProjectsSection;
