import {Pool} from "pg";

let conn: any;
if (!conn){
    conn = new Pool({

        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: '1234',
        port: 5432,
    });

}
export {conn};

