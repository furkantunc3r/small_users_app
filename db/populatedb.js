require('dotenv').config();
const {
    Client
} = require("pg");
const {
    argv
} = require('node:process');

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon'),
  ('Furkan');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: `postgresql://${argv[2]}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();