var express = require('express');
var redis = require('redis');

var app = express();

const PORT = process.env.PORT || 8081;

var client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send(`Visits are ${visits}`);
        client.set('visits', parseInt(visits) + 1)
    })
})

app.listen(PORT, () => {
    console.log(`Listening at post ${PORT}`)
})