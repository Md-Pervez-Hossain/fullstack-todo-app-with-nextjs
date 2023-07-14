import mongoose from "mongoose";
const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nextjs-project:oLKlxkdsOLWy4rtV@cluster0.zr5yxev.mongodb.net/crud_next"
    );
    console.log("mongoose Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
