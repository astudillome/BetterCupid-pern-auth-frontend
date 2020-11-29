import React, { useState, useEffect } from 'react';
import UserInfo from '../components/UserInfo';
import ViewProfile from '../components/ViewProfile';
import AboutMe from '../components/AboutMe';
import ProfileModel from '../models/profile';

const ViewProfileInfo = (props) => {
  const [displayName, setDisplayName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [geoState, setGeoState] = useState("");
 
  // console.log(props)

  const viewProfile = () => {
    // extract the user id
    ProfileModel.viewProfile(props.match.params.id).then((data) => { 
      console.log(data.profile)
      setDisplayName(data.profile.display_name);
        setAge(data.profile.age);
        setCity(data.profile.city);
        setGeoState(data.profile.state);
    })
  }

  useEffect(() => {
    viewProfile()
  }, []);
  // should targetProfile be data.profile.userId?
  
  return (
    <div className="profile-container">
      <ViewProfile displayName={ displayName } age={ age } city={ city } 
      state={ geoState } currentUser={ props.currentUser } targetProfile={ props.match.params.id } />
      <AboutMe />
    </div>
  )
}


export default ViewProfileInfo;
