'use client';

import { ProjectStatus } from '@/types/ProjectType';
import { getImageUrl } from '@/utils/utils';
import styles from '@styles/components/ProjectBlock.module.scss';
import Link from 'next/link';

interface IProps {
	status: ProjectStatus;
	name: string;
	description: string;
	images: any;
	slug: string;
}

const ProjectBlock = (props: IProps) => {
	const { status, name, description, images, slug } = props;

	const projectImageUrl = getImageUrl({ data: images.data[0] });

	return (
		<Link href={`/project/${slug}`} className={styles.wrapper} style={{ backgroundImage: `url(${projectImageUrl})` }}>
			<span className={`${styles.status} ${styles[status]}`}></span>
			<span className={styles.name}>{name}</span>
			<span className={styles.description}>{description}</span>
		</Link>
	);
};

export default ProjectBlock;
