import React, { useState, useEffect } from 'react';
import ProfileModel from '../models/profile';

const EditProfile = (props) => {
  const [profile, setProfile] = useState({})
  
  const fetchProfile = () => {
    ProfileModel.getOwnProfile().then(data => {
      if (data) {
        setProfile(data)
      } 
    })
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  const handleUpdate = e => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      ProfileModel.editProfile(profile)
      .then(data => {
          console.log('Successfully updated profile', data)
          props.history.push('/profile')
      })
  }

  if (!profile.display_name) {
    return null
  }
  
  return (
    <div className="edit-profile-form card">
      <h4 className="edit-profile-header">Edit Profile</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="display_name" className="col-form-label">Display Name</label>
          <div className="col-sm-10">
            <input
              onChange={handleUpdate}
              value={profile.display_name}
              type="text"
              id="display_name"
              name="display_name"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="col-form-label">Gender</label>
          <div className="col-sm-10">
            <input
              onChange={handleUpdate}
              value={profile.gender}
              type="text"
              id="gender"
              name="gender"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="image" className="col-form-label">Profile Picture (URL)</label>
          <div className="col-sm-10">
            <input
              onChange={handleUpdate}
              value={profile.image}
              type="text"
              id="image"
              name="image"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="city" className="col-form-label">City</label>
          <div className="col-sm-10">
            <input
              onChange={handleUpdate}
              value={profile.city}
              type="text"
              id="city"
              name="city"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="state" className="col-form-label">State</label>
          <div className="col-sm-10">
            <input
              onChange={handleUpdate}
              value={profile.state}
              type="text"
              id="state"
              name="state"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="about_me" className="col-form-label">About Me</label>
          <div className="col-sm-10">
            <input
              onChange={handleUpdate}
              value={profile.about_me}
              type="text"
              id="about_me"
              name="about_me"
            />
          </div>
        </div>
        <button type="submit" className="btn pink-button submit-button">Submit</button>
      </form>
    </div>
  )
}
export default EditProfile;