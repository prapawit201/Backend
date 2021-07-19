const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const { Client } = require("pg");

const client = new Client({
  user: "babe",
  host: "127.0.0.1",
  database: "nestdemo",
  password: "2542",
  port: 5432,
});

client.connect();

app.use("/", async (req, res) => {
  const query = `select * from public.user`;
  return await client
    .query(query, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      for (let row of res.rows) {
        console.log(row);
      }
      
      client.end();
    })

});


app.listen(PORT, () => {
  console.log(`server start port ${PORT}`);
});
