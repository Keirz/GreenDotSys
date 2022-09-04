// const redis = require('redis');

// const client = redis.createClient ({
//     socket: {
//         host: '',
//         port: ''
//     },
//     password:''
// });

// client.on('error', err => {
//     console.log('Error ' + err);
// })
//queue.js
const redis = require('redis');
const client = redis.createClient ({
    host: 'localhost',
    port: '6379'
});

client.on("error", (error) => {
    console.error(error);
});

async function publish(channel, value) {
    return client.publish(channel, JSON.stringify(value));
}

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

async function main(){
    console.log("VAI CONECTAR");
    await client.connect();
    console.log("CONECTOU")
    while(1){
        await sleep(1000);
        publish('greendotsys',{
            sensorId:123,
            data:30
        })
        console.log("publish")
    }    
}
main()