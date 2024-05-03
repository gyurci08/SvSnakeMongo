import {scores} from "$db/scores";
import {json} from "@sveltejs/kit";
import type {UpdateResult} from "mongodb";

export async function GET(){
    const data = await scores.find({}, {projection: {'_id': 0,'name': 1, 'score': 1}}).sort({score:-1}).limit(20).toArray();
    return json( data )
}

export async function POST(requestEvent){
    const { request } = requestEvent;
    const { name, score } = await request.json();
    const data = await scores.find({'name': name}, {projection: {'_id': 0,'name': 1, 'score': 1}}).toArray()
    console.log("Filtered:", data);

    let inserted: Document | UpdateResult;

    if (data.length>0){
        const inserted = await scores.replaceOne({'name': name},{name:name, score: score});
        console.log("Replaced: ", inserted);
        return json(inserted,{ status:201 });
    }
    else{
        const inserted = await scores.insertOne({name: name, score: score});
        console.log("Inserted: ", inserted);
        return json(inserted,{ status:201 });

    }

    return json("Null:null", { status:500 });
}



