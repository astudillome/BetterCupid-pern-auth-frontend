import React from "react";
import { Link } from "react-router-dom";

// renders the browse page results
const BrowseResults = (props) => {
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
          <p>
            {props.city}, {props.state}
          </p>
        </div>
        <Link
          to={"/profile/" + props.userId}
          className="btn pink-button info-card-button"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};
export default BrowseResults;
