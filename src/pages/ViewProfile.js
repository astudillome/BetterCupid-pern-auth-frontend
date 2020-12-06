import React, { useState, useEffect } from 'react';
import ViewProfile from '../components/ViewProfile';
import AboutMe from '../components/AboutMe';
import ProfileModel from '../models/profile';

// Gets details to view profile of a non-logged in user
const ViewProfileInfo = (props) => {
  const [displayName, setDisplayName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [geoState, setGeoState] = useState("");
  const [image, setImage] = useState("");
  const [aboutMe, setAboutMe] = useState("");
 
  const viewProfile = () => {
    ProfileModel.viewProfile(props.match.params.id).then((data) => { 
      setDisplayName(data.profile.display_name);
      setAge(data.profile.age);
      setCity(data.profile.city);
      setGeoState(data.profile.state);
      setImage(data.profile.image);
      setAboutMe(data.profile.about_me);
    })
  }

  useEffect(() => {
    viewProfile()
  }, []);
  
  return (
    <div className="profile-container">
      <ViewProfile displayName={ displayName } age={ age } city={ city } 
      state={ geoState } image={ image } currentUser={ props.currentUser } 
      targetProfile={ props.match.params.id }  />
      <AboutMe aboutMe={ aboutMe } />
    </div>
  )
}

export default ViewProfileInfo;
