import {scores} from "$db/scores";
import type {PageServerLoad} from "./$types";

export const load: PageServerLoad = async function() {
    const data = await scores.find({}, {limit: 20, projection: {'_id': 0,'name': 1, 'score': 1}}).toArray();
    console.log("Data: ", data);
    return { scores: data }
}