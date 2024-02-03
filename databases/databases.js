const mongoose = require('mongoose')
db_uri = process.env.DB_URI
mongoose.connect(db_uri).then(() => {
    console.log("Database Connected Succesfully")
}).catch(() => {
    console.log("Error while connecting Database")
}
)
