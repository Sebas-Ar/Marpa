export const data = () => {
    let database = [];
    for (let i = 2020; i < 2021; i++) {
        for (let j = 7; j <= 7; j++) {
            const month = new Date(i, j, 0).getDate();
            for (let k = 1; k <= month; k++) {
                for (let l = 0; l < 24; l++) {
                    const date = new Date(i, j - 1, k, l);
                    database.push({
                        date,
                        batteryVoltage: parseFloat((Math.random() * 10).toFixed(3)),
                        panelVoltage: parseFloat((Math.random() * 10).toFixed(3)),
                        circuitCurrent: parseFloat(Math.random().toFixed(3)),
                    });
                }
            }
        }
    }
    return database
}
