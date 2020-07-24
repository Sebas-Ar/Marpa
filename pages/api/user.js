import middleware from "../../middlewares/withMiddleware";
import withAuthenticated from "../../middlewares/withAuthenticated";
import { ObjectId } from 'mongodb'

const user = async (req, res) => {

    if (req.method === 'POST') {
        
        const {userId, fetchDate, range, light} = req.body
        console.log(req.body) 
        const dates = await req.db.collection("users").aggregate(aggregateDates(userId, fetchDate, range)).toArray();
        
        try {
            
            if ( range !== 0) {

                dates[light].dates = dates[light].dates.map(value => new Date(value).getDate())
                let days = dates[light].dates.filter((value, i, array) => array.indexOf(value) === i)

                let repeats = []
                days.map((value) => {
                    let num = 0
                    dates[light].dates.map(val => {
                        if (value === val) num++
                    })
                    repeats.push(num)
                })


                for (const key in dates[light]) {
                    if (key !== 'dates') {
                        let acumulate = 0
                        let array = []
                        repeats.map( repeat => {
                            let sum = 0
                            for (let i = 0 + acumulate; i < repeat + acumulate; i++) {
                                sum += dates[light][key][i]
                            }
                            array.push(parseFloat((sum / repeat).toFixed(3)))
                            acumulate += repeat
                        })
                        dates[light][key] = array
                    }
                }

                dates[light].dates = days

            } else {
                dates[light].dates = dates[light].dates.map((date) => new Date(date).getHours()+'')
            }

            res.status(200).json({
                state: "ok",
                dates: dates[light],
                lightNum: dates.length,
            })

        } catch (error) {
            res.status(200).json({
                state: "error",
                dates: {},
                lightNum: dates.length,
            })
        }

    }else {
        res.status(405).json({ message: "We only support POST" })
    }
    
}

const aggregateDates = (userId, date, range) => [
    { $match: { _id: ObjectId(userId) } },
    { $unwind: "$lights" },
    {
        $project: {
            _id: false,
            voltajes: {
                $filter: {
                    input: "$lights.values",
                    as: "value",
                    cond: {
                        $and: [
                            {
                                $gte: [
                                    "$$value.date",
                                    new Date(
                                        date.year,
                                        date.month - 1,
                                        date.day - range,
                                        0
                                    ),
                                ],
                            },
                            {
                                $lte: [
                                    "$$value.date",
                                    new Date(
                                        date.year,
                                        date.month - 1,
                                        date.day,
                                        23
                                    ),
                                ],
                            },
                        ],
                    },
                },
            },
        },
    },
    {
        $project: {
            dates: {
                $filter: {
                    input: "$voltajes.date",
                    as: "date",
                    cond: {},
                },
            },
            panelVoltages: {
                $filter: {
                    input: "$voltajes.panelVoltage",
                    as: "panel",
                    cond: {},
                },
            },
            batteryVoltage: {
                $filter: {
                    input: "$voltajes.batteryVoltage",
                    as: "battery",
                    cond: {},
                },
            },
            circuitCurrent: {
                $filter: {
                    input: "$voltajes.circuitCurrent",
                    as: "circuit",
                    cond: {},
                },
            },
        },
    },
]

export default withAuthenticated(middleware(user));

/* for (let i = 2020; i < 2023; i++) {
    for (let j = 1; j <= 13; j++) {
        const month = new Date(i, j, 0).getDate();
        for (let k = 1; k <= month; k++) {
            for (let l = 0; l < 24; l++) {
                const date = new Date(i, j - 1, k, l);
                database.push({
                    date,
                    batteryVoltage: parseFloat((Math.random() * 10).toFixed(3)),
                    panelVoltage: parseFloat((Math.random() * 10).toFixed(3)),
                    circuitCurrent: parseFloat(Math.random().toFixed(3)),
                    light: Math.round(Math.random()),
                });
            }
        }
    }
} */

