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

	const statusClasses = status === 'done'
		? 'bg-green-500'
		: status === 'pending'
		? 'bg-yellow-400'
		: '';

	return (
		<Link
			href={`/project/${slug}`}
			className="project-block-overlay relative w-full flex flex-col justify-end min-h-[227px] h-full pl-2.5 bg-cover mb-2.5 md:max-w-[295px]"
			style={{ backgroundImage: `url(${projectImageUrl})` }}
		>
			<span className={`absolute w-[15px] h-[15px] top-2.5 left-2.5 rounded-full z-[1] ${statusClasses}`}></span>
			<span className="text-base font-bold leading-normal z-[1]">{name}</span>
			<span className="my-[5px] mb-5 text-sm font-light leading-normal z-[1]">{subtitle}</span>
		</Link>
	);
};

export default ProjectBlock;
