'use client';

import Link from 'next/link';
import { ICMSImage } from '@/types/cmsTypes';
import { motion } from 'framer-motion';

interface IProps {
	name: string;
	images: ICMSImage[];
	slug: string;
	index?: number;
}

const ProjectBlock = (props: IProps) => {
	const { name, images, slug, index = 0 } = props;

	const projectImageUrl = images[0].url;

	const fadeInAnimationVariants = {
		initial: { opacity: 0, y: 30 },
		animate: (index: number) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * index } }),
	};

	return (
		<motion.div
			variants={fadeInAnimationVariants}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}
			custom={index}
		>
			<Link
				href={`/project/${slug}`}
				className="group relative block w-full aspect-[4/3] rounded-lg overflow-hidden"
			>
				<div
					className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
					style={{ backgroundImage: `url(${projectImageUrl})` }}
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
				<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
					<span className="block text-lg font-bold leading-tight">{name}</span>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectBlock;
