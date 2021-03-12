export const data = () => {
    let database = []
    for (let i = 2021; i < 2022; i++) {
        for (let j = 1; j <= 3; j++) {
            const month = new Date(i, j, 0).getDate()
            for (let k = 1; k <= month; k++) {
                for (let l = 0; l < 24; l++) {
                    const date = new Date(i, j - 1, k, l)
                    database.push({
                        date,
                        batteryVoltage: parseFloat(
                            (Math.random() * 10).toFixed(3)
                        ),
                        panelVoltage: parseFloat(
                            (Math.random() * 10).toFixed(3)
                        ),
                        circuitCurrent: parseFloat(Math.random().toFixed(3)),
                    })
                }
            }
        }
    }
    return database
}
