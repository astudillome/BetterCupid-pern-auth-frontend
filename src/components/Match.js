import React from "react";
import { Link } from "react-router-dom";

// renders the details of the match for the matches page
const Match = (props) => {
  const useImage = () => {
    if (
      props.match.image === null ||
      props.match.image === undefined ||
      props.match.image === ""
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
          <img
            src={props.match.image}
            height="180px"
            width="180px"
            alt="image"
          />
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
        <h4 className="card-title">{props.match.display_name}</h4>
        <div className="card-text">
          <p>
            {props.match.city}, {props.match.state}
          </p>
        </div>
        <Link
          to={"/profile/" + props.match.userId}
          className="btn pink-button info-card-button"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default Match;
