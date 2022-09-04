const redis = require('redis');

const client = redis.createClient();

client.on("error", (error) => {
    console.error(error);
});

async function subscribe(channel, callback) {
    const subscriber = client.duplicate();
 
    await subscriber.connect();
    await subscriber.subscribe('greendotsys', (message) => {
    console.log(message); // 'message'
    });
}

module.exports = {
    subscribe
}
