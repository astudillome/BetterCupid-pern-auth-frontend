const REACT_APP_API_URL = "http://localhost:4000/api/v1"

export default class ProfileModel {
  static getAllProfiles(data) {
    return fetch(`${REACT_APP_API_URL}/profile/browse`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
  }
  static getOwnProfile() {
    return fetch(`${REACT_APP_API_URL}/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    }).then(res => res.json())
  }

  static viewProfile(userId) {
    return fetch(`${REACT_APP_API_URL}/profile/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    }).then(res => res.json())
  }

  static createProfile(data) {
    return fetch(`${REACT_APP_API_URL}/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }

  static editProfile(data) {
    return fetch(`${REACT_APP_API_URL}/profile/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
  static deleteProfile(data) {
    return fetch(`${REACT_APP_API_URL}/profile`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
}


