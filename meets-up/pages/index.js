import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {id: 'm1',
  title: "명지대",
  address: "용인시 처인구",
  image: "https://img.hankyung.com/photo/202202/AA.21218839.1.jpg",
  },
  {id: "m2",
  title: "The Coffee Bean",
  address: "서울시 강남구 역삼동",
  image: "https://image.ajunews.com/content/image/2018/04/01/20180401151236565154.jpg",
  },
];

const HomePage = () => {
  return <Layout>
    <MeetupList meets={DUMMY_MEETUPS} />
  </Layout>
};

export default HomePage;
