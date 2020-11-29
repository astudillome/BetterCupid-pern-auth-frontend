import React, { useState, useEffect } from 'react';
import Match from '../components/Match';
import ProfileModel from '../models/profile';
import RelationshipModel from '../models/relationship';

const Matches = (props) => {
  const [matches, setMatches] = useState([]);

  const findMatches = () => {
    RelationshipModel.findMatches()
    .then((allMatches) => {
      console.log(allMatches)
      setMatches(allMatches)
    })
  }

  useEffect(() => {
    findMatches()
  }, []);

  return (
    <div className="profile-container">
      <Match />
      <Match />
      <Match />
    </div>
  ) 
}

export default Matches;