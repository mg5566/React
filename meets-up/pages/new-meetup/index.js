import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log("NewMeetup", enteredMeetupData);

    // send to backend server using REST api
  };

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  );
};

export default NewMeetup;
