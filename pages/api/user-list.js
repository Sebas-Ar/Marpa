import middleware from '../../middlewares/withMiddleware'


const handle = async (req, res) => {
    if (req.method === 'POST') {
        const { userFind } = req.body

        const users = await req.db.collection('users').aggregate(aggregate(userFind)).toArray()

        res.send({ status: 'ok', users })
    } else {
        res.send({ status: 'error' })
    }
}

const aggregate = (userFind) => (
    [
        {
            $match: {
                name: {$regex: userFind === '' ? '.' : userFind, $options: 'i'},
                type: "empresa"
            }
        },
        {
            $project: {
                name: true,
                NIT: true,
                email: true
            }
        }
    ]
)

export default middleware(handle)
