import mqtt from 'mqtt'
import withMiddleware from '../../middlewares/withMiddleware'

const handler = async (req, res) => {

    const option = {
        username: 'sebas',
        connectTimeout: 4000,
        clientId: 'client' + new Date().getUTCMilliseconds(),
        keepalive: 60,
        clean: true
    }

    const clientMqtt = mqtt.connect('ws://3.17.13.240:8083/mqtt', option)

    clientMqtt.on('connect', () => {
        clientMqtt.subscribe('GPIO', err => {
            if (err){
                console.error(err);
            } else {
                console.log('connect')
            }
        })
    })
    let num = 0;
    clientMqtt.on('message', (topic, msg) => {
        console.log(msg.toString(), 'text')
        console.log(num)
        num++
        req.db.collection('users').updateOne(
            {name: "Coca Cola"},
            {$push: {"lights.$[loc].values": msg.toString()}},
            {arrayFilters: [{"loc.location": "Cr 100 # 78"}]}
        )
        if (num === 10) {
            clientMqtt.end()
        } 
    })
    
    clientMqtt.on('close', () => {
        console.log('it was disconnected')
        clientMqtt.end()
    })


    res.send({message: 'funciona'})

}

export default withMiddleware(handler)