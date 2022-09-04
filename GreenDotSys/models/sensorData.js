const redis = require('redis');

const client = redis.createClient();

client.on("error", (error) => {
    console.error(error);
});

async function subscribe(channel, callback) {
    try{

        const subscriber = client.duplicate();
        
        await subscriber.connect();
        await subscriber.subscribe('greendotsys', (message) => {
            try{
                callback(JSON.parse(message));

            }catch(err){
                console.log(err);
            }
            //console.log(message);
        });
    }catch(err){
        console.log("ERRO AO CONECTAR NO REDIS")
    }
}

module.exports = {
    subscribe
}
