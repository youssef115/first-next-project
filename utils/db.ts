import mongoose from "mongoose";
const connect = async () => {
    try{
  const mongoString = process.env.MONGO;
  if (typeof mongoString === "string" ) {
    await mongoose.connect(mongoString);
  }
}catch(err){
    throw new Error("connection failed ")
}
};
export default connect