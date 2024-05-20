'use client';

import styles from '@styles/components/ProjectBlock.module.scss';
import Link from 'next/link';
import { ICMSImage } from '@/types/cmsTypes';

interface IProps {
	status: string;
	name: string;
	subtitle: string;
	images: ICMSImage[];
	slug: string;
}

const ProjectBlock = (props: IProps) => {
	const { status, name, subtitle, images, slug } = props;

	const projectImageUrl = images[0].url;

	return (
		<Link
			href={`/project/${slug}`}
			className={styles.wrapper}
			style={{ backgroundImage: `url(${projectImageUrl})` }}
		>
			<span className={`${styles.status} ${styles[status]}`}></span>
			<span className={styles.name}>{name}</span>
			<span className={styles.description}>{subtitle}</span>
		</Link>
	);
};

export default ProjectBlock;
