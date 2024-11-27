import { env } from '$env/dynamic/private';

export async function load({ params, fetch }) {
	const response = await fetch(`${env.VITE_API_URL}/api/pages/${params.slug}`);
	if (response.ok) {
		const page = await response.json();
		return {
			page,
			meta: {
				title: page.title,
				slug: page.slug,
				description: 'Welcome to our Manaki Start uP'
			},
			status: response.status
		};
	} else {
		return {
			page: null,
			meta: {},
			status: response.status || 500
		};
	}
}

export const ssr = true;
export const csr = false;
