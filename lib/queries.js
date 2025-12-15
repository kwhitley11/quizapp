// queries the database
import { sql } from './db';

export async function getVersion() {
    const result = await sql`SELECT version()`;
    return result[0].version
}