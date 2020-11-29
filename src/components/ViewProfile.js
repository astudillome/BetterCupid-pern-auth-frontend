// NOTE: the next 2 lines MUST be kept separate to prevent a compiling error, because
// if you import React in curly brackets it will return an error that says 
// 'cannot read createElement of undefined'
import React from 'react';
import { useState, useCallback } from 'react';
import Profile from '../pages/Profile';
import ViewProfile from '../pages/ViewProfile'
import UserModel from '../models/user';
import ProfileModel from '../models/profile';
import RelationshipModel from '../models/relationship';

const ViewProfileInfo = (props) => {
  const [isLiked, setIsLiked] = useState(false)
  const recipientId = props.targetProfile
  const currentUser = props.currentUser

  const updateLikeStatus = (currentUser) => {
    if (isLiked) {
      RelationshipModel.unlikeUser(
        { currentUser },
        recipientId
      ).then(() => 
        setIsLiked(false)
      )
    } else {
      RelationshipModel.likeUser(
        { currentUser },
        recipientId
      ).then(() =>
        setIsLiked(true)
      )
    }
  }

  // console.log(props.targetProfile)

  return (
    <div className="card flex-row flex-wrap user-info">
      <div className="card-header border-0">
        <img src='https://www.flaticon.com/premium-icon/icons/svg/2102/2102633.svg' height='180px' width='180px' alt='user icon' />
      </div>
      <div className="card-block info-card-text">
        {/* THIS IS HOW WE PASS PROPS */}
        <h4 className="card-title">{props.displayName}</h4>
        <div className="card-text">
          <p>{props.age}</p>
          <p>{props.city}, {props.state}</p>
        </div>
        <a href="#" className="info-card-button" onClick={() => updateLikeStatus(props.currentUser) }>
          {isLiked
            ? <img src='https://i.imgur.com/7LesXMV.png' height='20px' width='20px' alt='heart' />
            : <img src='https://www.flaticon.com/svg/static/icons/svg/1077/1077035.svg' height='20px' width='20px' alt='heart' />
          }
        </a>
        <a href="#" className="info-card-button">
          <img src='https://www.flaticon.com/svg/static/icons/svg/1077/1077071.svg' height='20px' width='20px' alt='message' />
        </a>

      </div>
    </div>
  )
}

export default ViewProfileInfo;