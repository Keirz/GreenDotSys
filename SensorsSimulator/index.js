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
    const minTemperature =15; // vai aq mesmo q to c sono, dps muda
    const maxTemperature = 30;
    let value = 15;
    let isIncreasing = true;
    console.log("VAI CONECTAR");
    await client.connect();
    console.log("CONECTOU")
    while(1){
        await sleep(3000);
      
        publish('greendotsys',{
            sensorId:1,
            value
        })
        if(value<=minTemperature){
            isIncreasing = true
            value +=1;
        }else if(value>=maxTemperature){
            isIncreasing = false
            value -=1;
        }else{
            value = isIncreasing?value+1:value-1;
        }
        console.log("publish")
    }    
}
main()