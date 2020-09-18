---
Layout:
Title: 'Node js with SQL'
Date:   '2020-09-18'
---

##  Node js with SQL

First I created a connection file that has a config object which contains my credentials and the name of the database and its localhost.
After creating the config object I then created a connection string that would connect to my database so I can get the data that is in the database.

`const sql = require('mssql')
require('dotenv').config()
const config = {
    user: process.env.DATABASEUSER,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    options: {
        encrypt: true,
        enableArithAbort: true

    }
}

const poolPromise = new sql.ConnectionPool(config).connect().then(pool => {
    console.log('connected to mssql')
    return pool
}).catch(err => console.log('database connection Failed! Bad Config:', err))

module.exports = {
    sql, poolPromise
}
`

I then created a route with a get request to fetch data from the database, what I can say is that the get request with node js and SQL is not that much different from connecting to MongoDB which is what I have been using lately apart from the connection string and the finding data from the database of which with mongoose and MongoDB we use .find() to fetch and with SQL we use poolPromise with a request.

const { poolPromise } = require('../connection/DB')

const appRoutes = (app) => {
    app.get('/queries', async (req, res) => {
        const { sql } = req.query;
        try {
            const pool = await poolPromise
            const results = await pool.request().query(`${sql}`)
            res.send(results.recordsets[0])
        } catch (err) {
            res.status(500).json(err.message)
        }
    })

}


module.exports = { appRoutes }

Then with the server file where we initialize the express app, it's still the same of which am use to when am using MongoDB.

const express = require("express");
const cors = require('cors')
const bodyPaser = require('body-parser')
const app = express();
const { appRoutes } = require('./routes/appRoutes')

app.use(cors())
app.use(bodyPaser.json())

appRoutes(app)


const PORT = 7000;

app.listen(PORT, () => console.log(`app running on ${PORT}`));
