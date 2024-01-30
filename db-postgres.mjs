import { sql } from './db.js';

export class DatabasePostgres {
    async list(search){
    let videos

    if (search) {
        videos = await sql`select * from videos where tittle ilike "%${search}%`
    } else {
        videos = await sql`select * from videos`

    }
    return videos
}

create(video) {
    const { id, title, description, duration } = video;

    sql`insert into videos (id, title, description, duration) VALUES (${id}, ${title}, ${description}, ${duration})`;
}

update (id, video) {
    const {  title, description, duration} = video

    sql `update videos set title = ${title}, description = ${description}, duration = ${duration}) where `
};

deleteById (id) {
    sql`delete from videos where id = ${id}`
};

}




    