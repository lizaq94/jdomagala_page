'use client';

import ProjectBlock from '@/components/ProjectBlock/ProjectBlock';
import Slider from '@/components/Slider/Slider';
import { IProjectData } from '@/types/cmsTypes';
import { SwiperSlide } from 'swiper/react';
import useRwd from '@/hooks/useRwd';

interface IProps {
	projects: IProjectData[];
}

const ProjectSectionRWDView = ({ projects }: IProps) => {
	const { isRwd } = useRwd();

	if (!isRwd) return null;

	return (
		<Slider height={400}>
			{projects.map((project) => (
				<SwiperSlide key={project.id}>
					<ProjectBlock
						status={project.projectStatus}
						name={project.title}
						subtitle={project.subtitle}
						images={project.images}
						slug={project.slug}
					/>
				</SwiperSlide>
			))}
		</Slider>
	);
};

export default ProjectSectionRWDView;
