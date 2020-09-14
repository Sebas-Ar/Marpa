import mqtt from 'mqtt'
import withMiddleware from '../../middlewares/withMiddleware'
import { ObjectId } from 'mongodb'

const handler = async (req, res) => {

    const { light, user, userId, state } = req.body

    const userName = user.split('').map(letter => letter === ' ' ? '-' : letter).join('').toLowerCase()
    const lightName = light.split('').map(letter => letter === ' ' ? '-' : letter).join('').toLowerCase()

    await req.db.collection('users').updateOne({_id: ObjectId(userId)}, {$set: {"lightsUser.$[light].state": !state}}, {arrayFilters: [{"light.lightName": light}]})

    const option = {
        username: `${userName}`,
        connectTimeout: 4000,
        clientId: `${userName}_${lightName}`,
        keepalive: 60,
        clean: true
    }

    const clientMqtt = mqtt.connect('ws://104.154.37.183:8083/mqtt', option)

    clientMqtt.on('connect', () => {
        clientMqtt.subscribe(`${userName}/${lightName}`, err => {
            if (err){
                console.error(err);
            } else {
                console.log('connect')
            }
        })
    })
    
    clientMqtt.on('message', (topic, msg) => {

        const date = new Date()

        try {
            const {batteryVoltage, panelVoltage, circuitCurrent} = JSON.parse(msg.toString())            
            req.db.collection('lights').updateOne(
                {lightName: light, userId: ObjectId(userId)},
                {
                    $push: { 
                        values: {
                            date,
                            batteryVoltage,
                            panelVoltage,
                            circuitCurrent,
                        }
                    }
                }
            )
        } catch (error) {
            console.error( new Error(error));
        }
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