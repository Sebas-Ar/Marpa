import middleware from "../../middlewares/withMiddleware";
import withAuthenticated from "../../middlewares/withAuthenticated";
import { ObjectId } from 'mongodb'

const user = async (req, res) => {

    if (req.method === 'POST') {
        console.log('llamado')
        
        const {userId, fetchDate, range, light} = req.body
        const [user] = await req.db.collection("users").find({_id: ObjectId(userId)}).toArray()
        let [lightUser] = await req.db.collection('lights').aggregate(aggregateLight(user._id, fetchDate, range, light)).toArray()
        if (lightUser) {
            if (range !== 0) {

                lightUser.dates = lightUser.dates.map(date => new Date(date).getDate())
                const days = lightUser.dates.filter((date, i, array) => array.indexOf(date) === i)
    
                
                let num
    
                const repeats = days.map( day => {
                    num = 0
                    lightUser.dates.forEach( date => {
                        if (day === date) num++
                    })
                    return num
                })

                let sum
    
                for (const key in lightUser) {
                    if (key !== 'date' && key !== 'location' && key !== 'stateLight1' && key !== 'stateLight2') {
                        let acumulate = 0
                        let averages = []

                        repeats.forEach( repeat => {
                            sum = 0
                            for (let i = 0 + acumulate; i < repeat + acumulate; i++) {
                                sum += lightUser[key][i]
                            }
                            averages.push(parseFloat((sum / repeat).toFixed(3)))
                            acumulate += repeat
                        })
                        lightUser[key] = averages
                    }
                }
                
                lightUser.dates = days
                

            } else {
                lightUser.dates = lightUser.dates.map((date) => new Date(date).getHours()+'')
            }
        }

        /* try { */

            res.status(200).json({
                state: "ok",
                dates: lightUser || {},
                lightNum: user.lightsUser,
            })

        /* } catch (error) {
            res.status(200).json({
                state: "error",
                dates: {},
                lightNum: dates.length,
            })
        } */

    }else {
        res.status(405).json({ message: "We only support POST" })
    }
    
}

const aggregateLight = (userId, date, range, lightName) => [
    { $match: { userId: ObjectId(userId) } },
    { $match: { lightName: lightName } },
    { $project: {
        _id: false,
        location: true,
        stateLight1: true,
        stateLight2: true,
        values: {
            $filter: {
                input: "$values",
                as: "val",
                cond: { $and: [ 
                    { $gte: [ "$$val.date", new Date(date.year, date.month - 1, date.day - range, 0) ] }, 
                    { $lte: [ "$$val.date", new Date(date.year, date.month - 1, date.day, 23) ] } 
                ]}
            }
        }
    }},
    {
        $project: {
            location: true,
            stateLight1: true,
            stateLight2: true,
            dates: {
                $filter: {
                    input: "$values.date",
                    as: "date",
                    cond: {},
                },
            },
            panelVoltages: {
                $filter: {
                    input: "$values.panelVoltage",
                    as: "panel",
                    cond: {},
                },
            },
            batteryVoltage: {
                $filter: {
                    input: "$values.batteryVoltage",
                    as: "battery",
                    cond: {},
                },
            },
            circuitCurrent: {
                $filter: {
                    input: "$values.circuitCurrent",
                    as: "circuit",
                    cond: {},
                },
            },
        },
    },
]

export default withAuthenticated(middleware(user));