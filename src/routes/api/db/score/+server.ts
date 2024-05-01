import {scores} from "$db/scores";
import {json} from "@sveltejs/kit";

export async function GET(){
    const data = await scores.find({}, {projection: {'_id': 0,'name': 1, 'score': 1}}).sort({score:-1}).limit(20).toArray();
    return json( data )
}

export async function POST(requestEvent){
    const { request } = requestEvent;
    const { name, score } = await request.json();
    const inserted = await scores.insertOne({name: name, score: score});
    return json(inserted,{ status:201 });
}



