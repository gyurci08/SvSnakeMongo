import type { PageServerLoad } from './$types';
import {redirect} from "@sveltejs/kit";


export const actions = {
    default: async ({request, cookies}) => {
            const formData = await request.formData();
            console.log(formData);

            const username = formData.get('username');

            // @ts-ignore
            cookies.set('username', username, {
                httpOnly: true,
                sameSite: 'strict',
                secure: false,
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            });
    }
}



export const load = (async ({ cookies }) => {
    const username = cookies.get('username');

    if (username == null){
        redirect(302,"/settings")
    }

    return {
        username
    };
}) satisfies PageServerLoad;


