//middleware
import middleware from "../../middlewares/withMiddleware";
import xlsx from 'xlsx'
import fs from 'fs'
import archiver from 'archiver'

import { ObjectId } from "mongodb"

const handler = async (req, res) => {

    console.log(req.method)

    if (req.method === "POST") {
        const {userId, light} = req.body
        
        const lights = await req.db.collection("users").aggregate([
            {$match: { _id: ObjectId(userId)}},
            {$project: {
                _id: false,
                light: {
                    $filter: {
                        input: '$lights.values',
                        as: 'light',
                        cond: {}
                    }
                }
            }}
        ]).toArray()

        try {
                
            const obj = lights[0].light[light].map((e) => e)

            const newWB = xlsx.utils.book_new()
            const newWS = xlsx.utils.json_to_sheet(obj)

            xlsx.utils.book_append_sheet(newWB, newWS, "name")

            xlsx.writeFile(newWB, "other.xlsx")

            if (fs.existsSync('other.xlsx')) {
                fs.renameSync('other.xlsx', 'public/excels/other.xlsx', (err) => {
                    if (err) throw err
                    console.log('funciona')
                })
            }

            fs.readdir('public', (err, arch) => {
                console.log(arch)
            })

            let output = fs.createWriteStream('public/excels/test.zip')
            let archive = archiver('zip', { gzip: true, zlib: { level: 9 } })
            archive.on('error', (err) => {throw err})
            archive.pipe(output)
            archive.file('public/excels/other.xlsx', { name: 'other.xlsx' })
            archive.finalize().then(() => {
                fs.unlinkSync('public/excels/other.xlsx') 
                res.json({ status: 'ok' })
            })

        } catch (error) {
            res.json({ status: 'error' })
        }


    } else {

        res.json({status: 'error'})

    }
}

export default middleware(handler)