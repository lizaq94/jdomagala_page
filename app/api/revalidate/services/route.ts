import { revalidateServicesDataFromCMS } from '@/lib/actions';

export async function POST() {
	try {
		await revalidateServicesDataFromCMS();
	} catch (error) {
		return new Response(`Revalidated services data error: ${error}`, {
			status: 400,
		});
	}

	return new Response('Success services data revalidate', {
		status: 200,
	});
}
