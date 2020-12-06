import React, { useState, useEffect } from 'react';
import Match from '../components/Match';
import RelationshipModel from '../models/relationship';

// Gets matches based on like status and sends props to match in components
const Matches = (props) => {
  const [matches, setMatches] = useState([]);

  const findMatches = () => {
    RelationshipModel.findMatches()
    .then((allMatches) => {
      setMatches(allMatches)
    })
  }

  useEffect(() => {
    findMatches()
  }, []);

  console.log(matches)

  return (
    <div className="profile-container">
      {matches.map((match, key) => { return <Match match={ match } key={ key } /> })}
    </div>
  )
}

export default Matches;