import {Pool} from "pg";

let conn: any;
if (!conn){
    conn = new Pool({

        user: 'postgres',
        host: 'localhost',
        database: 'tasksdb',
        password: '1234',
        port: 5432,
    });

}
export {conn};

