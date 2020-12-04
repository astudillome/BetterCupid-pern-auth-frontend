import React, { useState, useEffect } from "react";
import RelationshipModel from "../models/relationship";

// renders the profile of a non-logged in user
const ViewProfileInfo = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const recipientId = props.targetProfile;
  const currentUser = props.currentUser;

  const getRelationship = () => {
    RelationshipModel.checkLikeStatus({ currentUser }, recipientId).then(
      setIsLiked
    );
  };

  useEffect(() => {
    getRelationship();
  }, [props.targetProfile]);

  const updateLikeStatus = (currentUser) => {
    if (isLiked) {
      RelationshipModel.unlikeUser({ currentUser }, recipientId).then(() =>
        getRelationship()
      );
    } else {
      RelationshipModel.likeUser({ currentUser }, recipientId).then(() =>
        getRelationship()
      );
    }
  };

  const useImage = () => {
    if (
      props.image === null ||
      props.image === undefined ||
      props.image === ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="card flex-row flex-wrap user-info">
      <div className="card-header border-0">
        {useImage() ? (
          <img src={props.image} height="180px" width="180px" alt="image" />
        ) : (
          <img
            src="https://i.imgur.com/4Zx85np.png"
            height="180px"
            width="180px"
            alt="user icon"
          />
        )}
      </div>
      <div className="card-block info-card-text">
        <h4 className="card-title">{props.displayName}</h4>
        <div className="card-text">
          <p>{props.age}</p>
          <p>
            {props.city}, {props.state}
          </p>
        </div>
        <a
          href="#"
          className="info-card-button"
          onClick={() => updateLikeStatus(props.currentUser)}
        >
          {isLiked ? (
            <img
              src="https://i.imgur.com/7LesXMV.png"
              height="20px"
              width="20px"
              alt="heart"
            />
          ) : (
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/1077/1077035.svg"
              height="20px"
              width="20px"
              alt="heart"
            />
          )}
        </a>
        <a href="#" className="info-card-button">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/1077/1077071.svg"
            height="20px"
            width="20px"
            alt="message"
          />
        </a>
      </div>
    </div>
  );
};

export default ViewProfileInfo;
