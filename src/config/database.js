import dotenv from 'dotenv'
dotenv.config();
import mongoose from "mongoose";

const connect = async () => {
    await mongoose.connect(process.env.MONGO_URL);
}

export default connect;