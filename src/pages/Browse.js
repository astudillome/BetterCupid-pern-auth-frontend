import React, { useState, useEffect } from 'react';
import BrowseResults from '../components/BrowseResults';
import ProfileModel from '../models/profile';
const ProfilesList = (props) => {
  const [profiles, setProfiles] = useState([]);
  const [displayName, setDisplayName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  let displayNames = [];
  let cities = [];
  let states = [];
  const fetchProfiles = () => {
    ProfileModel.getAllProfiles().then(data => {

     
      
      for (let i = 0; i < 3; i++) {
        displayNames.push(data.profiles[i].display_name)
        cities.push(data.profiles[i].city)
        states.push(data.profiles[i].state)
      }
      setDisplayName(displayNames);
      setCity(cities);
      setState(states);
      
      
    })
  }
  
  console.log(displayName)
  
  useEffect(() => {
    fetchProfiles()
  }, []);
  
  return (
    <div className="profile-container">
      <BrowseResults displayName={displayName[0]} city={city[0]} state={state[0]} />
      <BrowseResults displayName={displayName[1]} city={city[1]} state={state[1]}/>
      <BrowseResults displayName={displayName[2]} city={city[2]} state={state[2]}/>
    </div>
  );
}
export default ProfilesList;