//our-domain.com/new-meetup

import  NewMeetupForm  from'../../components/meetups/NewMeetupForm';

  function  NewMeetup(){
    function  AddMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData);
    }
return <NewMeetupForm  onAddMeetup={AddMeetupHandler}/>

  }
  export default NewMeetup;