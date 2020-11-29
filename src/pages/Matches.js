import React, { useState, useEffect } from 'react';
import Match from '../components/Match';
import ProfileModel from '../models/profile';
import RelationshipModel from '../models/relationship';

const Matches = (props) => {
  return (
    <div className="profile-container">
      <Match />
      <Match />
      <Match />
    </div>
  ) 
}

export default Matches;