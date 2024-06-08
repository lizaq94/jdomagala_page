import { revalidateProjectsDataFromCMS } from '@/lib/actions';

export async function POST() {
	try {
		await revalidateProjectsDataFromCMS();
	} catch (error) {
		return new Response(`Revalidated projects data error: ${error}`, {
			status: 400,
		});
	}

	return new Response('Success projects data revalidate', {
		status: 200,
	});
}
