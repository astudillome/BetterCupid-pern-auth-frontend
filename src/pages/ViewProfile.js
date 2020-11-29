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
  const [image, setImage] = useState("");
  const [aboutMe, setAboutMe] = useState("");
 
  // console.log(props)

  const viewProfile = () => {
    // extract the user id
    ProfileModel.viewProfile(props.match.params.id).then((data) => { 
      console.log(data.profile)
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
  // should targetProfile be data.profile.userId?
  
  return (
    <div className="profile-container">
      <ViewProfile displayName={ displayName } age={ age } city={ city } 
      state={ geoState } image={ image } currentUser={ props.currentUser } 
      targetProfile={ props.match.params.id } viewProfile={ viewProfile } />
      <AboutMe aboutMe={ aboutMe } />
    </div>
  )
}


export default ViewProfileInfo;
