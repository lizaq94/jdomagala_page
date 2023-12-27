'use client';

import { ProjectStatus } from '@/types/ProjectType';
import { getImageUrl } from '@/utils/utils';
import styles from '@styles/components/ProjectBlock.module.scss';

interface IProps {
	status: ProjectStatus;
	name: string;
	description: string;
	images: any;
}

const ProjectBlock = (props: IProps) => {
	const { status, name, description, images } = props;

	const projectImageUrl = getImageUrl({ data: images.data[0] });

	return (
		<div className={styles.wrapper} style={{ backgroundImage: `url(${projectImageUrl})` }}>
			<span className={`${styles.status} ${styles[status]}`}></span>
			<span className={styles.name}>{name}</span>
			<span className={styles.description}>{description}</span>
		</div>
	);
};

export default ProjectBlock;
