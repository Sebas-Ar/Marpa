//middleware
import middleware from "../../middlewares/withMiddleware";
import xlsx from 'xlsx'
import fs from 'fs'
import archiver from 'archiver'

import { ObjectId } from "mongodb"

const handler = async (req, res) => {

    if (req.method === "POST") {
        const {userId, light} = req.body
        console.log(userId)
        const [lights] = await req.db.collection("lights").aggregate([
            {$match: { userId: ObjectId(userId)}},
            {$match: { lightName: light.lightName }},
            {$project: {
                _id: false,
                values: true,
            }}
        ]).toArray()

        try {
                
            const obj = lights.values.map((e) => e)

            const newWB = xlsx.utils.book_new()
            const newWS = xlsx.utils.json_to_sheet(obj)
            
            const fileName = light.lightName.split('').map(letter => letter === ' ' ? '-' : letter ).join('')

            xlsx.utils.book_append_sheet(newWB, newWS, "name")
            
            xlsx.writeFile(newWB, `${fileName}.xlsx`)


            if (fs.existsSync(`${fileName}.xlsx`)) {
                fs.renameSync(`${fileName}.xlsx`, `public/excels/${fileName}.xlsx`, (err) => {
                    if (err) throw err
                    console.log('funciona')
                })
            }

            fs.readdir('public', (err, arch) => {
                console.log(arch)
            })

            let output = fs.createWriteStream(`public/excels/${fileName}.zip`)
            let archive = archiver('zip', { gzip: true, zlib: { level: 9 } })
            archive.on('error', (err) => {throw err})
            archive.pipe(output)
            archive.file(`public/excels/${fileName}.xlsx`, { name: `${fileName}.xlsx` })
            archive.finalize().then(() => {
                fs.unlinkSync(`public/excels/${fileName}.xlsx`) 
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