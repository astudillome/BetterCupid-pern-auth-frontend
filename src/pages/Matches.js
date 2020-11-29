import React, { useState, useEffect } from 'react';
import Match from '../components/Match';
import ProfileModel from '../models/profile';
import RelationshipModel from '../models/relationship';

const Matches = (props) => {
  return (
    <div className="profile-container">
    {/* for (let i = 0; i < matches.length; i++) {
      <Match match={ matches[i] } />
    } */}
      <Match />
      <Match />
      <Match />
    </div>
  ) 
}

export default Matches;