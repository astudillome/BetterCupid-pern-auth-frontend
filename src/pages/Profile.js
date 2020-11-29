import React, { useState, useEffect } from 'react';
import UserInfo from '../components/UserInfo';
import AboutMe from '../components/AboutMe';
import ProfileModel from '../models/profile';


// next steps passing props into user info component
// do a call to the user table within profile controller
// do another const fetch user in addition to fetchProfile
const Profile = (props) => {
  const [displayName, setDisplayName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [aboutMe, setAboutMe] = useState("")
  
  // const [state, setState] = useState("");

  const fetchProfile = () => {
    ProfileModel.getOwnProfile().then(data => {
      if (!data) {
        return
      } else {
        setDisplayName(data.display_name);
        setAge(data.age);
        setCity(data.city);
        setState(data.state);
        setAboutMe(data.about_me)
      }
      // viewProfile()
    })
  }

  useEffect(() => {
    fetchProfile()
  }, []);
 
  // console.log(props)

  // const viewProfile = () => {
  //   // extract the user id
  //   ProfileModel.viewProfile(props.match.params.id).then({ 
  //     // targetProfile
  //   })
  // }

  // useEffect(() => {
  //   viewProfile()
  // }, []);

 

 

 
console.log(displayName)
  return (
    <div className="profile-container">
      <UserInfo displayName={displayName} age={age} city={city} state={state} />
      <AboutMe aboutMe={aboutMe} />
    </div>
  )
}


export default Profile;
