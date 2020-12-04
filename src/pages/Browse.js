import React, { useState, useEffect } from 'react';
import BrowseResults from '../components/BrowseResults';
import ProfileModel from '../models/profile';

// gets data to send as props to browse results component
const ProfilesList = (props) => {
  const [displayName, setDisplayName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [userId, setUserId] = useState('');
  const [image, setImage] = useState('');
  
  let displayNames = []
  let cities = []
  let states = []
  let userIds = []
  let images = []
  
  const fetchProfiles = () => {
    ProfileModel.getAllProfiles().then(data => {
      // note: if data.profiles.length is less than 3, then some user info cards
      // will appear blank. Render dynamic number of instances of that component? 
      for (let i = 0; i < data.profiles.length; i++) {
        displayNames.push(data.profiles[i].display_name)
        cities.push(data.profiles[i].city)
        states.push(data.profiles[i].state)
        userIds.push(data.profiles[i].userId)
        images.push(data.profiles[i].image)
      }
      setDisplayName(displayNames);
      setCity(cities);
      setState(states);
      setUserId(userIds);
      setImage(images)
    })
  }

  useEffect(() => {
    fetchProfiles()
  }, []);
  
  return (
    <div className="profile-container">
      <BrowseResults displayName={ displayName[0] } city={ city[0] } 
      state={ state[0] } userId={ userId[0] } image={ image[0] } />
      <BrowseResults displayName={ displayName[1] } city={ city[1] } 
      state={ state[1] } userId={ userId[1] } image={ image[1] } />
      <BrowseResults displayName={ displayName[2] } city={ city[2] } 
      state={ state[2] } userId={ userId[2] } image={ image[2] } />
    </div>
  );
}
export default ProfilesList;