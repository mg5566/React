import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  console.log("meetup data", props.meetupData);

  return (
    <MeetupDetail title={"알아"} description={"몰라"} address={"어디야"} />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  return {
    props: {
      meetupData: {
        id: context.params.meetupId,
        title: "알아",
        description: "몰라",
        address: "어디니?",
      },
    },
  };
};

export default MeetupDetails;
