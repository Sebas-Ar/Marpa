import mqtt from "mqtt"
import withMiddleware from "../../middlewares/withMiddleware"
import { ObjectId } from "mongodb"

const handler = async (req, res) => {
    const { light, user, userId, state } = req.body

    const userName = user
        .split("")
        .map((letter) => (letter === " " ? "-" : letter))
        .join("")
        .toLowerCase()
    const lightName = light
        .split("")
        .map((letter) => (letter === " " ? "-" : letter))
        .join("")
        .toLowerCase()

    await req.db
        .collection("users")
        .updateOne(
            { _id: ObjectId(userId) },
            { $set: { "lightsUser.$[light].state": !state } },
            { arrayFilters: [{ "light.lightName": light }] }
        )

    const option = {
        username: `${userName}`,
        connectTimeout: 4000,
        clientId: `${userName}_${lightName}`,
        keepalive: 60,
        clean: true,
    }

    const clientMqtt = mqtt.connect("ws://104.154.37.183:8083/mqtt", option)

    clientMqtt.on("connect", () => {
        clientMqtt.subscribe(`${userName}/${lightName}`, (err) => {
            if (err) {
                console.error(err)
            } else {
                console.log("connect")
            }
        })
    })

    clientMqtt.on("message", (topic, msg) => {
        const date = new Date()

        try {
            const {
                batteryVoltage,
                panelVoltage,
                circuitCurrent,
                stateLight1,
                stateLight2,
                lat,
                lng,
            } = JSON.parse(msg.toString())

            let set

            if (lat && lng) {
                set = {
                    stateLight1,
                    stateLight2,
                    "location.lat": lat,
                    "location.lng": lng,
                }
            } else {
                set = {
                    stateLight1,
                    stateLight2,
                }
            }

            console.log(JSON.parse(msg.toString()))
            req.db.collection("lights").updateOne(
                { lightName: light, userId: ObjectId(userId) },
                {
                    $push: {
                        values: {
                            date,
                            batteryVoltage,
                            panelVoltage,
                            circuitCurrent,
                        },
                    },
                    $set: set,
                }
            )
        } catch (error) {
            console.error(new Error(error))
        }
    })

    clientMqtt.on("close", async () => {
        const [dataLight] = await req.db
            .collection("users")
            .find({ _id: ObjectId(userId) })
            .toArray()
        console.log(dataLight)
        await req.db
            .collection("users")
            .updateOne(
                { _id: ObjectId(userId) },
                { $set: { "lightsUser.$[light].state": !state } },
                { arrayFilters: [{ "light.lightName": light }] }
            )
        console.log("it was disconnected")
        clientMqtt.end()
    })

    res.send({ message: "funciona" })
}

export default withMiddleware(handler)

/* 

{"batteryVoltage" : 7.29, "panelVoltage" : 7.29, "circuitCurrent" : 0.11, "stateLight1" : 0, "stateLight2" : 1, "lat" : 3.731, "lng" : -64.341}

*/
