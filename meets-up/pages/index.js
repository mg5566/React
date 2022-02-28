import { MongoClient } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>My Meetups</title>
        <meta
          name="description"
          content="Meetup 을 추가하고, 목록을 확인할 수 있습니다."
        />
      </Head>
      <MeetupList meets={props.meetups} />
    </Fragment>
  );
};

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
