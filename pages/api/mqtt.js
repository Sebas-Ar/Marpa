import mqtt from 'mqtt'
import withMiddleware from '../../middlewares/withMiddleware'
import { ObjectId } from 'mongodb'

const handler = async (req, res) => {

    const { light, user, userId, state } = req.body

    const userName = user.split('').map(letter => letter === ' ' ? '-' : letter).join('').toLowerCase()
    const lightName = light.split('').map(letter => letter === ' ' ? '-' : letter).join('').toLowerCase()

    await req.db.collection('users').updateOne({_id: ObjectId(userId)}, {$set: {"lightsUser.$[light].state": !state}}, {arrayFilters: [{"light.lightName": light}]})

    const option = {
        username: 'sebas',
        connectTimeout: 4000,
        clientId: `${userName}_${lightName}`,
        keepalive: 60,
        clean: true
    }

    const clientMqtt = mqtt.connect('ws://104.154.37.183:8083/mqtt', option)

    clientMqtt.on('connect', () => {
        clientMqtt.subscribe('GPIO', err => {
            if (err){
                console.error(err);
            } else {
                console.log('connect')
            }
        })
    })
    
    clientMqtt.on('message', (topic, msg) => {
        const date = new Date()
        req.db.collection('lights').updateOne(
            {lightName: light, userId: ObjectId(userId)},
            {
                $push: { 
                    values: {
                        date,
                        batteryVoltage: parseFloat(msg.toString()),
                        panelVoltage: parseFloat(msg.toString()) - 1,
                        circuitCurrent: parseFloat(msg.toString()) / 10,
                    }
                }
            }
        )
    })
    
    clientMqtt.on('close', async () => {
        const [dataLight] = await req.db.collection('users').find({_id: ObjectId(userId)}).toArray()
        console.log(dataLight)
        await req.db.collection('users').updateOne({_id: ObjectId(userId)}, {$set: {"lightsUser.$[light].state": !state}}, {arrayFilters: [{"light.lightName": light}]})
        console.log('it was disconnected')
        clientMqtt.end()
    })


    res.send({message: 'funciona'})

}

export default withMiddleware(handler)