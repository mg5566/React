import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return <MeetupList meets={props.meetups} />;
};

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   console.log("getServerSideProps", req, res);

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export const getStaticProps = async () => {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://test:test@fuckingdb.rufm6.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
