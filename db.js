// Importe o necessário para sua implementação
import 'dotenv/config'
import postgres from "postgres";

// Obtenha as variáveis de ambiente
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;


// Crie a URL de conexão
const URL = postgres({
host: PGHOST,
database: PGDATABASE,
username: PGUSER,
password: PGPASSWORD,
port: 5432,
 ssl: true,
            extra: {
                ssl: {
                    rejectUnauthorized: false,
                }},
connection: {
    options: `project=${ENDPOINT_ID}`,
},
});

// Exporte a função criada
export const sql = postgres(URL, {ssl: 'require'});