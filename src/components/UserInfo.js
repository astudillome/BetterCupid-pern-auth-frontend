import React, { useState } from 'react';
import Profile from '../pages/Profile';
import ViewProfile from '../pages/ViewProfile'
import UserModel from '../models/user';
import ProfileModel from '../models/profile';
import RelationshipModel from '../models/relationship';

const UserInfo = (props) => {
  const [isLiked, setIsLiked] = useState(false)
  const recipientId = props.targetProfile
  const currentUser = props.currentUser

  const deleteUser = () => {
    UserModel.deleteUser({
    }).then(
      ProfileModel.deleteProfile({
      }).then(
        localStorage.clear()
        )
      )
  }

  const checkLikeStatus = () => {
    RelationshipModel.findRelationship()
  }

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

  const useImage = () => {
    if (props.image === null || props.image === undefined || props.image === "") {
      return false
    } else {
      return true
    }
  }

  return (
    <div className="card flex-row flex-wrap user-info">
      <div className="card-header border-0">
        {useImage()
          ? <img src={props.image} height='180px' width='180px' alt='image' />
          : <img src='https://i.imgur.com/4Zx85np.png' height='180px' width='180px' alt='user icon' />
        }
      </div>
      <div className="card-block info-card-text">
        <h4 className="card-title">{props.displayName}</h4>
        <div className="card-text">
          <p>{props.age}</p>
          <p>{props.city}, {props.state}</p>
        </div>
        <a href="/profile/edit" className="btn pink-button info-card-button">Edit</a>
        <a href="/" className="btn pink-button info-card-button" onClick={deleteUser}>Delete</a>
      </div>
    </div>
  )
}

export default UserInfo