import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log("Data Base - Connected Successfully"));

    await mongoose.connect(`${process.env.MONGODB_URI}/Authentication-System`);
};

export default connectDB