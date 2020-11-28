import React, { useState, useEffect } from 'react';
import UserInfo from '../components/UserInfo';
import AboutMe from '../components/AboutMe';
import ProfileModel from '../models/profile';

// next steps passing props into user info component
// do a call to the user table within profile controller
// do another const fetch user in addition to fetchProfile
const Profile = (props) => {
  // const [profile, setProfile] = useState("");
  //  displayName = {
        // this.setState = displayName
  // }
  const [displayName, setDisplayName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [targetProfile, setTargetProfile] = useState("");

  const fetchProfile = () => {
    ProfileModel.getOwnProfile().then(data => {
      if (!data) {
        return
      } else {
        setDisplayName(data.display_name);
        setAge(data.age);
        setCity(data.city);
        setState(data.state);
      }
    })
  }

  useEffect(() => {
    fetchProfile()
    testVar()
  }, []);
 
  console.log(props)

  const viewProfile = () => {
    // extract the user id
    ProfileModel.viewProfile(props.match.params.id).then(data =>
      {
        console.log(data)
        console.log(data.profile.id)
      })
  }

  useEffect(() => {
    viewProfile()
  }, []);

  console.log('The target profile is: ' + props.match.params.id)

  return (
    <div className="profile-container">
      <UserInfo displayName={ displayName } age={ age } city={ city } 
      state={ state } targetProfile={ targetProfile } />
      <AboutMe />
       
    </div>
  )
}


export default Profile;
