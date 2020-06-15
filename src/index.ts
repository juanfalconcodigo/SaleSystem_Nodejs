import Server from "./server";
import { connection } from "./environments/database";

const start = async () => {
    const resp = await connection();
    if(resp){
        const server=Server.instance;
        server.listen();
    }
}

start();