import db from "$db/mongo"

export const scores = db.collection('scores');
