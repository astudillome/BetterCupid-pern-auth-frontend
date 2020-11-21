import React from 'react';

const BrowseResults = () => {
    return (  
        <div className="card flex-row flex-wrap user-info">
            <div className="card-header border-0">
                <img src='https://www.flaticon.com/premium-icon/icons/svg/2102/2102633.svg' height='180px' width='180px' alt='user icon' />
            </div>
            <div className="card-block info-card-text">
                <h4 className="card-title">Display Name</h4>
                <div className="card-text">
                    <p>Age</p>
                    <p>Location</p>
                </div>
                <a href="#" className="btn pink-button info-card-button">
                    View Profile
                </a>
            </div>
        </div>
    )
}

export default BrowseResults;