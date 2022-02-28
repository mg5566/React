// our-domain.com/api/new-meetup
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // const { image, title, description, address } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://test:test@fuckingdb.rufm6.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log("new-meetup handler",result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
