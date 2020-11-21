const REACT_APP_API_URL = "http://localhost:4000/api/v1"

export default class ProfileModel {
  static getProfiles(data) {
    return fetch(`${REACT_APP_API_URL}/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
  static getProfile(data) {
    return fetch(`${REACT_APP_API_URL}/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
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

  static updateProfile(data) {
    return fetch(`${REACT_APP_API_URL}/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
  static removeProfile(data) {
    return fetch(`${REACT_APP_API_URL}/profile`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
}