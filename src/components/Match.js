import React from 'react';

const Match = (props) => {
  console.log(props)
  const useImage = () => {
    if (props.image === null || props.image === undefined) {
      return false;
    } 
      return true
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
        <h4 className="card-title">Display Name</h4>
        <div className="card-text">
          <p>Age</p>
          <p>Location</p>
        </div>
        <a href="#" className="info-card-button">
          <img src='https://www.flaticon.com/svg/static/icons/svg/1077/1077071.svg' height='20px' width='20px' alt='message' />
        </a>
      </div>
    </div>
  )
}

export default Match;