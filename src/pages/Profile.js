import React, { useState, useEffect } from 'react';
import UserInfo from '../components/UserInfo';
import AboutMe from '../components/AboutMe';
import ProfileModel from '../models/profile';

// Gets info for userInfo and aboutMe components
const Profile = (props) => {
  const [displayName, setDisplayName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [image, setImage] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  
  const fetchProfile = () => {
    ProfileModel.getOwnProfile().then(data => {
      if (!data) {
        return
      } else {
        setDisplayName(data.display_name);
        setAge(data.age);
        setCity(data.city);
        setState(data.state);
        setAboutMe(data.about_me);
        setImage(data.image);
      }
    })
  }

  useEffect(() => {
    fetchProfile()
  }, []);
 
console.log(displayName)
  return (
    <div className="profile-container">
      <UserInfo displayName={displayName} age={age} city={city} state={state} image={image} />
      <AboutMe aboutMe={aboutMe} />
    </div>
  )
}

export default Profile;