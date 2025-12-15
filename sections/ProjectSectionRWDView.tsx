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
						name={project.title}
						images={project.images}
						slug={project.slug}
					/>
				</SwiperSlide>
			))}
		</Slider>
	);
};

export default ProjectSectionRWDView;
