import { revalidateAllDataFromCMS } from '@/lib/actions';

export async function POST() {
	try {
		await revalidateAllDataFromCMS();
	} catch (error) {
		return new Response(`Revalidated error: ${error}`, {
			status: 400,
		});
	}

	return new Response('Success revalidate', {
		status: 200,
	});
}
