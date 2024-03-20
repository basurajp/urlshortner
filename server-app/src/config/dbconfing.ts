import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.MONOGDBCONNECTION_URL}`)
        console.log('connection establish ', connect.connection.host )
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDb;