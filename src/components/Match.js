import React from 'react';

const Match = (props) => {
    console.log(props.match)

    return (  
        <div className="card flex-row flex-wrap user-info">
            <div className="card-header border-0">
                <img src='https://www.flaticon.com/premium-icon/icons/svg/2102/2102633.svg' height='180px' width='180px' alt='user icon' />
            </div>
            <div className="card-block info-card-text">
                <h4 className="card-title">{ props.match.display_name }</h4>
                <div className="card-text">
                    <p>{ props.match.city }, { props.match.state }</p>
                </div>
                <a href="#" className="info-card-button">
                    <img src='https://www.flaticon.com/svg/static/icons/svg/1077/1077071.svg' height='20px' width='20px' alt='message' />
                </a>
            </div>
        </div>
    )
}

export default Match;