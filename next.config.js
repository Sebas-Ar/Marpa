require("dotenv").config()

module.exports = {
    env: {
        MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
        ADMIN_TOKEN: process.env.ADMIN_TOKEN,
        USER_TOKEN: process.env.USER_TOKEN,
    },
}
