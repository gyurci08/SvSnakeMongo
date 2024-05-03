import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
    const username = cookies.get('username');

    return {
        username
    };
}) satisfies PageServerLoad;