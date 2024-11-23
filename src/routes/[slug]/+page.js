export async function load({ params, fetch }) {
	const response = await fetch(`http://localhost:8000/api/pages/${params.slug}`);
	const page = await response.json();
	return {
		page,
		meta: {
			title: page.title,
			slug: page.slug,
			description: 'Добро пожаловать в наш магазин - широкий выбор товаров'
		},
		status: response.status
	};
}

export const ssr = true;
export const csr = false;
